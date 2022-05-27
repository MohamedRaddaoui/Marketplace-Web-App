import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/app/services/user/user-auth.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  username: any = "mohamed"
  userImage: any = ""
  constructor(public aus:UserAuthService,private as:UserService) {

   }


   ngOnInit(): void {
    if(this.aus.isLoggedin()==true){
      let token : any = this.aus.getToken();
      let user : any=this.as.getUserFromToken(token);
      this.as.getUserByemail(user.username).subscribe((data) => {
        user = data;
        this.username = user[0].FirstName+'  '+user[0].LastName;
        this.userImage = user[0].image;
      })
    }
  }

}
