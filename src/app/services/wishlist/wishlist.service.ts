import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  back_URL = environment.URL_Api

  constructor(private httpclient:HttpClient) { }
  getallWishlist(){
    return this.httpclient.get(this.back_URL +'/api/wishlists/')
   }
   getallUserWishlistById(id:any){
    return this.httpclient.get(this.back_URL +`/api/wishlists/${id}`)
   }
  getWishlist (id:any){
    return this.httpclient.get(this.back_URL +`/api/wishlists/${id}`)
  }


  addToWishlist( id:any,idd:any){
    return this.httpclient.post(this.back_URL +`/usern/AddToWish/${id}/${idd}`,null)
  }
  deleteWishlist( id:any,idd:any){
    return this.httpclient.post(this.back_URL +`/usern/Remfromwish/${id}/${idd}`,null)
  }
}
