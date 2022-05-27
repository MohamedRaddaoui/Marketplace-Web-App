import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserAuthService } from '../services/user/user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  constructor(private aus:UserAuthService, private router:Router){

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return new Promise((resolve,reject)=>{
      if (this.aus.isLoggedin()== true){
        resolve(true)
      }else{
        this.router.navigate(['/login'],{queryParams:{returnURL:state.url}})
        resolve(false)
      }
    })  
  }
  
}
