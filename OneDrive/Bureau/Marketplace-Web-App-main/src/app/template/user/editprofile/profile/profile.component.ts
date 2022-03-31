import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserAuthService } from 'src/app/services/user/user-auth.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  editForm : any
  constructor(fb:FormBuilder, private us:UserService, private aus:UserAuthService) {
    this.editForm = fb.group({
      FirstName: ['', Validators.required],
      LastName: ['', Validators.required],
      email: ['', [Validators.required,Validators.email]],
      new_password : ['',Validators.required],
      birthDate : ['',[Validators.required]],
    })
  }

  ngOnInit(): void {
    let user = this.us.getUserFromToken(this.aus.getToken());
    this.us.getUserByemail(user.username).subscribe((data) => {
      user = data;
      console.log(data);
      const date = new Date(user[0].birthDate.timestamp* 1000).toISOString().slice(0, 10);
      console.log(date);
      this.editForm.setValue({
        FirstName:  user[0].FirstName,
        LastName: user[0].LastName,
        email: user[0].email,
        birthDate: date,

        new_password:""
      });

    })
  }
  edit(){
    let id:any;
    let user = this.us.getUserFromToken(this.aus.getToken());
    this.us.getUserByemail(user.username).subscribe((data) => {
      user = data;
      console.log(user[0].id);
    id=user[0].id;

    this.us.updateUser(this.editForm.value,user[0].id).subscribe((data) => {

      console.log(data);
         })});
    console.log(id);

  }
  get FirstName(){
    return this.editForm.get('FirstName');
  }
  set FirstName(value) {
    this.FirstName = value;
  }
  get LastName(){
    return this.editForm.get('LastName');
  }
  set LastName(value) {
    this.LastName = value;
  }
  get email(){
    return this.editForm.get('email');
  }
  set email(value) {
    this.email = value;
  }
  get new_password(){
    return this.editForm.get('new_password');
  }
  set new_password(value) {
    this.new_password = value;
  }
  set birthDate(value) {
    this.birthDate = value;
  }
  get birthDate(){
    return this.editForm.get('birthDate');
  }

}
