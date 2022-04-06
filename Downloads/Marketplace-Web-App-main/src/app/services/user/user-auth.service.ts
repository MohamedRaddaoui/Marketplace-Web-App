import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { JwtHelperService } from "@auth0/angular-jwt";
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  helper = new JwtHelperService();
  back_URL = environment.URL_Api

  constructor(private httpclient:HttpClient) {
    
   }
  isLoggedin():boolean{
    let token : any = this.getToken()
    if(token || !this.helper.isTokenExpired(token)){
      return true;
    }
    return false;
  }
  saveToken(token : any){
    localStorage.setItem('token',token);
  }
  getToken(){
    return localStorage.getItem('token');
  }
  login(f:FormGroup){
   return this.httpclient.post(this.back_URL + '/api/login',f.value);
  }
  getUsername(token:any){
    let decodedToken = this.helper.decodeToken(token);
    return decodedToken.username
  }
  getUserImage(token:any){
    let decodedToken = this.helper.decodeToken(token);
    return decodedToken.userImage
  }
}
