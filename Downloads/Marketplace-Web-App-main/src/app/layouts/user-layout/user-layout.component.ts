import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { UserAuthService } from 'src/app/services/user/user-auth.service';
import { UserService } from 'src/app/services/user/user.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-user-layout',
  templateUrl: './user-layout.component.html',
  styleUrls: ['./user-layout.component.css']
})
export class UserLayoutComponent implements OnInit {
  username: any = ""
  userImage: any = ""
  back_URL = environment.URL_Api

  constructor(public aus:UserAuthService,private as:UserService) {

   }


   ngOnInit(): void {
    if(this.aus.isLoggedin()==true){
      let token : any = this.aus.getToken();
      let user : any=this.as.getUserFromToken(token);
      this.as.getUserByemail(user.username).subscribe((data) => {
        user = data;
        this.username = user[0].FirstName+'  '+user[0].LastName;
        this.userImage = 	this.back_URL+'/uploads/images/products/'+user[0].image;
      })
    }
  }
}
