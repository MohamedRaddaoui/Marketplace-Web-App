import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/services/user/user-auth.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css','fonts/icomoon/style.css','css/bootstrap.min.css']
})
export class LoginComponent implements OnInit {
  loginForm : any
  constructor(private aus:UserAuthService ,private as:UserService,private fb:FormBuilder,private route: Router ) {
    this.loginForm = fb.group({
      username: ['', Validators.required],
      password : ['',Validators.required]
    })
   }

  ngOnInit(): void {
  }
  login(){
    let data:any;
    this.aus.login(this.loginForm).subscribe((response) => {
      data = response
      this.aus.saveToken(data.token)
      let user = this.as.getUserFromToken(this.aus.getToken())

      this.route.navigate([''])
    },)



  }
  get username(){
    return this.loginForm.get('username');
  }
  set username(value){
    this.username = value;
  }
  get password(){
    return this.loginForm.get('password');
  }
  set password(value){
    this.password = value;
  }

}
