import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css','./css/bootstrap.min.css','./fonts/icomoon/style.css']
})
export class SignupComponent implements OnInit {

  signupForm : any
  constructor(fb:FormBuilder) { 
    this.signupForm = fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required,Validators.email]],
      password : ['',Validators.required],
      re_password : ['',Validators.required],
    },{ validator: this.checkPasswords })
   }

  ngOnInit(): void {
  }
  print(){

  }
  checkPasswords(group: FormGroup) { // here we have the 'passwords' group
    let pass = group.get('password');
    let confirmPass = group.get('re_password');

    return pass === confirmPass ? null : { notSame: true }
  }
  get username(){
    return this.signupForm.get('username');
  }
  set username(value) {
    this.username = value;
  }
  get email(){
    return this.signupForm.get('email');
  }
  set email(value) {
    this.email = value;
  }
  get password(){
    return this.signupForm.get('password');
  }
  set password(value) {
    this.password = value;
  }
  get re_password(){
    return this.signupForm.get('re_password');
  }
  set re_password(value) {
    this.re_password = value;
  }

}
