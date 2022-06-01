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
  StartAuctions(){
    return this.httpclient.get(this.back_URL +'/usern/aucroom')
  }
  CloseAuctions(){
    return this.httpclient.get(this.back_URL +'/usern/aucroom2')
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
 updateAuction( id:any,newAuction:any){
   return this.httpclient.put(this.back_URL +`/api/auctions/${id}`,newAuction)
 }
  getallR_auctions(){
   return this.httpclient.get(this.back_URL +'/api/reverse_auctions',{params :this.params})
  }
 getR_auction (id:any){
   return this.httpclient.get(this.back_URL +`/api/reverse_auctions/${id}`)
 }
 addR_auction (profil:any){
   return this.httpclient.post(this.back_URL +'/api/reverse_auctions',profil)
 }
 deleteR_auction(id:any){
   return this.httpclient.delete(this.back_URL +`/api/reverse_auctions/${id}`)
 }
 updateR_auction( id:any,newUser:any){
   return this.httpclient.put(this.back_URL +`/api/reverse_auctions/${id}`,newUser)
 } 
 StopR_auction( id:any){
   return this.httpclient.post(this.back_URL +`/usern/endrauc/${id}`,null)
 }
 auctionPrice(user_id:any,room_id : any, ammount:any){
   return this.httpclient.post(this.back_URL +`/usern/Auctionromm/${user_id}/${room_id}/${ammount}`,null)
 }
 leaveRoom(user_id:any,room_id : any){
   return this.httpclient.post(this.back_URL +`/usern/leaveAuctionromm/${user_id}/${room_id}/`,null)
 }
 
}
