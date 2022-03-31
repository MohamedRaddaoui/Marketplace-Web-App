import { HttpParams, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RAuctionService {

  back_URL = environment.URL_Api
  params = new HttpParams({
  })
  d={
    firstname : "Mohamed",
    lastname : "Raddaoui"
   }
  constructor(private httpclient:HttpClient) { 
  }
  getallR_auctions(){
   return this.httpclient.get(this.back_URL +'/r-auction',{params :this.params})
  }
 getR_auction (id:any){
   return this.httpclient.get(this.back_URL +`/r-auction/${id}`)
 }
 addR_auction (profil:any){
   return this.httpclient.post(this.back_URL +'/addr-auction',profil)
 }
 deleteR_auction(id:any){
   return this.httpclient.delete(this.back_URL +`/r-auction/${id}`)
 }
 updateR_auction(newUser:any, id:any){
   return this.httpclient.patch(this.back_URL +`/r-auction/${id}`,newUser)
 }

}
