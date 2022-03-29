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
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required,Validators.email]],
      password : ['',Validators.required],
      re_password : ['',Validators.required],
      date : ['',Validators.required],
    })
   }

  ngOnInit(): void {
  }
  print(){
    this.us.addUser(this.signupForm)
  }
  get firstname(){
    return this.signupForm.get('firstname');
  }
  set firstname(value) {
    this.firstname = value;
  }
  get lastname(){
    return this.signupForm.get('firstname');
  }
  set lastname(value) {
    this.lastname = value;
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
