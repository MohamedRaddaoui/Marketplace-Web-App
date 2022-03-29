import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css','fonts/icomoon/style.css','css/bootstrap.min.css']
})
export class LoginComponent implements OnInit {
  loginForm : any
  constructor(private us:UserService , fb:FormBuilder) { 
    this.loginForm = fb.group({
      username: ['', Validators.required],
      password : ['',Validators.required]
    })
   }

  ngOnInit(): void {
  }
  print(){
    console.log(this.loginForm.value);
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
