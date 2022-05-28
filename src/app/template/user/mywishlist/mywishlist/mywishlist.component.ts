import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/app/services/user/user-auth.service';
import { UserService } from 'src/app/services/user/user.service';
import { WishlistService } from 'src/app/services/wishlist/wishlist.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mywishlist',
  templateUrl: './mywishlist.component.html',
  styleUrls: ['./mywishlist.component.css']
})
export class MywishlistComponent implements OnInit {
  wishlist : any
  back_URL = environment.URL_Api
  user:any
  constructor(private ws:WishlistService,private us:UserService, private aus:UserAuthService) {
     this.user = this.aus.getUserFromToken(this.aus.getToken());
    this.us.getUserByemail( this.user.username).subscribe((data) => {
      this.user = data;
      this.user=  this.user[0]
      console.log( this.user)
      this.wishlist= this.user.wishlist.auctions
      this.wishlist.forEach((auction : any) => {
        auction.products.image=	this.back_URL+'/uploads/images/products/'+ auction.products.image;
        auction.Date = new Date(auction.Date.timestamp * 1000).toISOString().slice(0, 10);
      })  })
   }

  ngOnInit(): void {
  }

  deleteWish(id:any,index:any){
    this.ws.deleteWishlist( this.user.id,id).subscribe(() => {
      Swal.fire({
      icon: 'success',
      title: 'Auction has been deleted',
      showConfirmButton: false,
      timer: 1500
    })
  })
  }
}
