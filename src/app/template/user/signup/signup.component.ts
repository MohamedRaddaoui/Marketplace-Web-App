import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/services/user/user-auth.service';
import { UserService } from 'src/app/services/user/user.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css','./css/bootstrap.min.css','./fonts/icomoon/style.css']
})
export class SignupComponent implements OnInit {
  signupForm : any
  constructor(fb:FormBuilder, private us:UserService, private aus:UserAuthService, private route:Router) {
    if(this.aus.isLoggedin()== true){
      this.route.navigate(['/'])
    }
    this.signupForm = fb.group({
      FirstName: ['', Validators.required],
      LastName: ['', Validators.required],
      email: ['', [Validators.required,Validators.email]],
      Number : ['', Validators.required],
      Country : ['', Validators.required],
      Region : ['', Validators.required],
      plainPassword : ['',[Validators.required,Validators.minLength(8)]],
      re_password : ['',Validators.required],
      birthDate : ['',Validators.required],
    })
   }

  ngOnInit(): void {
  }
  signup(){
    this.us.addUser(this.signupForm).subscribe((data) => {
      Swal.fire({
      icon: 'success',
      title: 'Signed up successfully !',
      showConfirmButton: false,
      timer: 1500
    })
    this.route.navigate(['/'])
  })
  }
  get FirstName(){
    return this.signupForm.get('FirstName');
  }
  set FirstName(value) {
    this.FirstName = value;
  }
  get LastName(){
    return this.signupForm.get('LastName');
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
  set Number(value) {
    this.birthDate = value;
  }
  get Number(){
    return this.signupForm.get('Number');
  }
  set Country(value) {
    this.birthDate = value;
  }
  get Country(){
    return this.signupForm.get('Country');
  }
  set Region(value) {
    this.birthDate = value;
  }
  get Region(){
    return this.signupForm.get('Region');
  }

}
