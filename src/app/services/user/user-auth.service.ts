import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { JwtHelperService } from "@auth0/angular-jwt";
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { UserService } from './user.service';


@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  helper = new JwtHelperService();
  back_URL = environment.URL_Api
  constructor(private httpclient:HttpClient,private route: Router,private as:UserService) {
    
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
  getUserFromToken(token : any){
    let user = this.helper.decodeToken(token);
    return user;
   }
  login(f:FormGroup){
   return this.httpclient.post(this.back_URL + '/api/login',f.value);
  }
  getUsername(token:any){
    let decodedToken = this.helper.decodeToken(token);
    return decodedToken.username
  }
  isSubscriber(){
    let token : any = this.getToken();
    let user : any=this.getUserFromToken(token);
    let roles : any
    this.as.getUserByemail(user.username).subscribe((data: any) => {
      user = data
      user = user[0]
      roles = user.role
    })
    if (roles.includes("ROLE_SUBSCRIBER")){
      return true;
    }
    return false;
  }
  isAdmin(){
    let token : any = this.getToken();
    let user : any=this.getUserFromToken(token);
    let roles : any
    this.as.getUserByemail(user.username).subscribe((data: any) => {
      user = data
      user = user[0]
      roles = user.role      
    })
    if (roles.includes("ROLE_ADMIN")){
      return true;
    }
    return false;
  }
  getUserImage(token:any){
    let decodedToken = this.helper.decodeToken(token);
    return decodedToken.userImage
  }
  checkPassword(id : any, pwd : any){
    return this.httpclient.get(this.back_URL + `/usern/chekPW/${id}/${pwd}`);
  }
  logout(){
    localStorage.removeItem('token');
    this.route.navigate(['/login']);
  }
}
