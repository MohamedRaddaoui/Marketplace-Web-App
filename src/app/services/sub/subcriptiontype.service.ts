import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubcriptiontypeService {
  back_URL = environment.URL_Api

  constructor(private httpclient:HttpClient) {

  }
  getallSubscriptionTypes(){
    return this.httpclient.get(this.back_URL +'/api/subscriptiontypes')
  }
  getSub (id:any){
    return this.httpclient.get(this.back_URL +`/api/subscriptiontypes/${id}`)
  }
  addSub (f:FormGroup){
    return this.httpclient.post(this.back_URL +'/api/subscriptiontypes',f.value);
  }
  deleteSub(id:any){
    return this.httpclient.delete(this.back_URL +`/api/subscriptiontypes/${id}`)
  }
  updateSub(newUser:any,id:any){
    return this.httpclient.put(this.back_URL +`/api/subscriptiontypes/${id}`,newUser)
  }
}
