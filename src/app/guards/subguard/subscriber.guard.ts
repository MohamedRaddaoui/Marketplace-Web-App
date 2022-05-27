import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserAuthService } from 'src/app/services/user/user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class SubscriberGuard implements CanActivate {
  constructor(private aus:UserAuthService, private router:Router){

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return new Promise((resolve,reject)=>{
      if (this.aus.isSubscriber()){
        resolve(true)
      }else{
        this.router.navigate(['/purchase-sub'],{queryParams:{returnURL:state.url}})
        resolve(false)
      }
    })  
  }
  
}
