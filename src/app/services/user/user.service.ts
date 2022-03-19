import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subscriber, Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
back_URL = environment.URL_Api
params = new HttpParams({

})
  constructor(private httpclient:HttpClient) { 
    
   }
   isUser(name:any){
    return this.httpclient.get(this.back_URL +`/User/${name}`)
   }
   getallUsers(){
    return this.httpclient.get(this.back_URL +'/Users',{params :this.params})
   }
  getUser (id:any){
    return this.httpclient.get(this.back_URL +`/User/${id}`)
  }
  addUser (profil:any){
    return this.httpclient.post(this.back_URL +'/addUser',profil)
  }
  deleteUser(id:any){
    return this.httpclient.delete(this.back_URL +`/User/${id}`)
  }
  updateUser(newUser:any, id:any){
    return this.httpclient.patch(this.back_URL +`/User/${id}`,newUser)
  }
}
