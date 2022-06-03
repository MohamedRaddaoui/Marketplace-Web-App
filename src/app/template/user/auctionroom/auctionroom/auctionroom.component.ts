import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AuctionService } from 'src/app/services/auction/auction.service';
import { ProductsService } from 'src/app/services/products/products.service';
import { UserAuthService } from 'src/app/services/user/user-auth.service';
import { UserService } from 'src/app/services/user/user.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-auctionroom',
  templateUrl: './auctionroom.component.html',
  styleUrls: ['./auctionroom.component.css']
})
export class AuctionroomComponent implements OnInit {
  isSub : any
  product : any
  auction : any
  back_URL = environment.URL_Api
  currentPrice = 0
  auctionRoom : any
  user : any
  constructor(private httpclient:HttpClient,private aus:UserAuthService,private as:UserService,private aucs:AuctionService,private ps:ProductsService,private route:ActivatedRoute,private router:Router) {
    let token : any = this.aus.getToken();
    let user : any=this.aus.getUserFromToken(token);
    this.as.getUserByemail(user.username).subscribe((data) => {
      user = data;
      user = user[0]
      this.user = user
      console.log(user)
      this.isSub = user.Subscription	|| null
    })
    this.route.params.subscribe((params) =>
    {
    this.ps.getProduct(params['product_id']).subscribe((response) => {
      this.product = response
      this.product.image=	this.back_URL+'/uploads/images/products/'+this.product.image;
    })
    this.aucs.getAuction(params['auction_id']).subscribe((response) => {
      this.auction = response
      console.log( this.auction)
      this.currentPrice = this.auction.price
      this.auctionRoom =       this.auction.auctionRoom.slice(this.auction.auctionRoom.lastIndexOf('/')+1,this.auction.auctionRoom.length)

      this.httpclient.get(this.back_URL +"/api/auction_rooms/"+this.auctionRoom).subscribe((response) => {
        console.log(response)
        this.auctionRoom =response      
      })
    })
    })
   }
  addPrice(price :any){
    if(price<this.currentPrice){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Auction price should be bigger than current price! ',
          showConfirmButton: false,
          timer: 1500
        })
    }else{
    this.aucs.auctionPrice(this.user.id,this.auctionRoom.id,parseInt(price)).subscribe((response) => {
      console.log(parseInt(price) )
      this.refreshAuctionData()
    })
  }
  }
  leaveAuctionRoom(){
    this.aucs.leaveRoom(this.user.id,this.auctionRoom.id).subscribe((response) => {
      this.router.navigate(['/'])
    })
  }
  refreshAuctionData(){
    this.route.params.subscribe((params) =>
    {
    this.aucs.getAuction(params['auction_id']).subscribe((response) => {
      this.auction = response
      this.auctionRoom =       this.auction.auctionRoom.slice(this.auction.auctionRoom.lastIndexOf('/')+1,this.auction.auctionRoom.length)

      this.httpclient.get(this.back_URL +"/api/auction_rooms/"+this.auctionRoom).subscribe((response) => {
        console.log(response)
        this.auctionRoom =response
        this.currentPrice = this.auctionRoom.LastPrice

      })
    })
    })
  }
  ngOnInit(): void {
  }

}
