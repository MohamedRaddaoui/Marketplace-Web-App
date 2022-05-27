import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { JwtHelperService } from "@auth0/angular-jwt";
import { Subscriber, Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {
helper = new JwtHelperService();
back_URL = environment.URL_Api
params = new HttpParams({

})
  constructor(private httpclient:HttpClient) {

   }
   isUser(name:any){
    return this.httpclient.get(this.back_URL +`/api/userns/${name}`)
   }
   getallUsers(){
    return this.httpclient.get(this.back_URL +'/api/userns',{params :this.params})
   }
  getUser (id:any){
    return this.httpclient.get(this.back_URL +`/api/userns/${id}`)
  }
  getUserByemail (id:any){

    return this.httpclient.get(this.back_URL +`/usern/FindbyEmail/${id}`)
  }
  addUser (f:FormGroup){
    return this.httpclient.post(this.back_URL +'/api/userns',f.value);
  }
  deleteUser(id:any){
    return this.httpclient.delete(this.back_URL +`/api/userns/${id}`)
  }
  updateUser(newUser:any,id:any){
    return this.httpclient.put(this.back_URL +`/api/userns/${id}`,newUser)
  }
}
