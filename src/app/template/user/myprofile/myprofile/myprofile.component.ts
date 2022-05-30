import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/services/user/user-auth.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {
  isSub : any
  constructor(private aus:UserAuthService,private as:UserService) {
    let token : any = this.aus.getToken();
    let user : any=this.aus.getUserFromToken(token);
    this.as.getUserByemail(user.username).subscribe((data) => {
      user = data;
      user = user[0]
      this.isSub = user.subscription_id	|| null
    })

  }

  ngOnInit(): void {
  }

}
