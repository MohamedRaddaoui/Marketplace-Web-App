import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OffersService {
  back_URL = environment.URL_Api

  constructor(private httpclient:HttpClient) { }
  getallOffers(){
    return this.httpclient.get(this.back_URL +'/api/offers')
   }
  getallOffersByR_auctionId(id : any){
    return this.httpclient.get(this.back_URL +`/api/offers/${id}`)
   }
  getOffer (id:any){
    return this.httpclient.get(this.back_URL +`/api/offers/${id}`)
  }
  addOffer (idu:any,idr:any,profil:any){
    return this.httpclient.post(this.back_URL +'/usern/offers/'+idu+'/'+idr,profil)
  }
  deleteOffer(id:any){
    return this.httpclient.delete(this.back_URL +`/api/offers/${id}`)
  }
  updateOffer(newAuction:any, id:any){
    return this.httpclient.patch(this.back_URL +`/api/offers/${id}`,newAuction)
  }
}
