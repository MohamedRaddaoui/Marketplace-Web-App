import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user/user.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css','./css/bootstrap.min.css','./fonts/icomoon/style.css']
})
export class SignupComponent implements OnInit {

  signupForm : any
  constructor(fb:FormBuilder, private us:UserService) {
    this.signupForm = fb.group({
      FirstName: ['', Validators.required],
      LastName: ['', Validators.required],
      email: ['', [Validators.required,Validators.email]],
      plainPassword : ['',Validators.required],
      re_password : ['',Validators.required],
      birthDate : ['',Validators.required],
    })
   }

  ngOnInit(): void {
  }
  signup(){
    this.us.addUser(this.signupForm)
  }
  get FirstName(){
    return this.signupForm.get('FirstName');
  }
  set FirstName(value) {
    this.FirstName = value;
  }
  get LastName(){
    return this.signupForm.get('FirstName');
  }
  set LastName(value) {
    this.LastName = value;
  }
  get email(){
    return this.signupForm.get('email');
  }
  set email(value) {
    this.email = value;
  }
  get plainPassword(){
    return this.signupForm.get('plainPassword');
  }
  set plainPassword(value) {
    this.plainPassword = value;
  }
  get re_password(){
    return this.signupForm.get('re_password');
  }
  set birthDate(value) {
    this.birthDate = value;
  }
  get birthDate(){
    return this.signupForm.get('birthDate');
  }
  set re_password(value) {
    this.re_password = value;
  }

}
