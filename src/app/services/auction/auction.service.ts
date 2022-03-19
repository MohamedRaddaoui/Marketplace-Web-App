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
  d={
    firstname : "Mohamed",
    lastname : "Raddaoui"
   }
  constructor(private httpclient:HttpClient) { 
    
  }
  getallAuctions(){
   return this.httpclient.get(this.back_URL +'/auctions',{params :this.params})
  }
 getAuction (id:any){
   return this.httpclient.get(this.back_URL +`/auction/${id}`)
 }
 addAuction (profil:any){
   return this.httpclient.post(this.back_URL +'/addauction',profil)
 }
 deleteAuction(id:any){
   return this.httpclient.delete(this.back_URL +`/auction/${id}`)
 }
 updateAuction(newUser:any, id:any){
   return this.httpclient.patch(this.back_URL +`/auction/${id}`,newUser)
 }
}
