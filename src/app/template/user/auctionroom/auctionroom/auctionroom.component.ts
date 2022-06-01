import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AuctionService } from 'src/app/services/auction/auction.service';
import { ProductsService } from 'src/app/services/products/products.service';
import { UserAuthService } from 'src/app/services/user/user-auth.service';
import { UserService } from 'src/app/services/user/user.service';
import { environment } from 'src/environments/environment';

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
  constructor(private aus:UserAuthService,private as:UserService,private aucs:AuctionService,private ps:ProductsService,private route:ActivatedRoute,private router:Router) {
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
      this.currentPrice = this.auction.price
      this.auctionRoom = this.auctionRoom
    })
    })
   }
  addPrice(price :any){
    this.aucs.auctionPrice(this.user.id,this.auctionRoom.id,price).subscribe((response) => {
      console.log(response)
      this.refreshAuctionData()
    })
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
      this.currentPrice = this.auction.price
      this.auctionRoom = this.auctionRoom
    })
    })
  }
  ngOnInit(): void {
  }

}
