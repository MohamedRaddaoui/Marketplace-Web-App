import { HttpParams, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuctionService {
  back_URL = environment.URL_Api
  params = new HttpParams({
  })
  constructor(private httpclient:HttpClient) {

  }
  getallAuctions(){
   return this.httpclient.get(this.back_URL +'/usern/FindbyrequestAuc/Accepted')
  }  getallrAuctions(){
   return this.httpclient.get(this.back_URL +'/usern/FindbyrequestRAuc/Accepted')
  }
  getallUserAuctionsById(id:any){
   return this.httpclient.get(this.back_URL +`/usern/Findauct/${id}`)
  }
  getallUserReverseAuctionsById(id:any){
   return this.httpclient.get(this.back_URL +`/usern/FindRevauct/${id}`)
  }
 getAuction (id:any){
   return this.httpclient.get(this.back_URL +`/api/auctions/${id}`)
 }
 addAuction (profil:any){
   return this.httpclient.post(this.back_URL +'/api/auctions',profil)
 }
 deleteAuction(id:any){
   return this.httpclient.delete(this.back_URL +`/api/auctions/${id}`)
 }
 updateAuction(newAuction:any, id:any){
   return this.httpclient.patch(this.back_URL +`/api/auction/${id}`,newAuction)
 }
  getallR_auctions(){
   return this.httpclient.get(this.back_URL +'/api/reverse_auctions',{params :this.params})
  }
 getR_auction (id:any){
   return this.httpclient.get(this.back_URL +`/api/reverse_auctions/${id}`)
 }
 addR_auction (profil:any){
   return this.httpclient.post(this.back_URL +'/api/addreverse_auctions',profil)
 }
 deleteR_auction(id:any){
   return this.httpclient.delete(this.back_URL +`/api/reverse_auctions/${id}`)
 }
 updateR_auction(newUser:any, id:any){
   return this.httpclient.patch(this.back_URL +`/api/reverse_auctions/${id}`,newUser)
 }

}
