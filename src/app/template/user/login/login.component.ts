import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserAuthService } from 'src/app/services/user/user-auth.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css','fonts/icomoon/style.css','css/bootstrap.min.css']
})
export class LoginComponent implements OnInit {
  loginForm : any
  url:any
  constructor(private aus:UserAuthService ,private as:UserService,private fb:FormBuilder,private router: Router,private ar:ActivatedRoute ) {



    this.url = this.ar.snapshot.queryParams['returnURL'] || '/'
    if(this.aus.isLoggedin()== true){
        this.router.navigate(['/'])
      }
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
      this.router.navigate([this.url])
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
