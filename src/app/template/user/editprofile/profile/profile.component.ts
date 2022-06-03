import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/services/user/user-auth.service';
import { UserService } from 'src/app/services/user/user.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  editForm : any
  image = 'https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/avatars/avatar1.jpg'
  back_URL = environment.URL_Api
  selectedFile : any
  useremail:any
  user:any
  constructor(private httpclient:HttpClient,fb:FormBuilder, private us:UserService, private aus:UserAuthService, public route:Router) {
   this.user= this.aus.getUserFromToken(this.aus.getToken());
   this.us.getUserByemail(this.user.username).subscribe((data) => {
    this.user = data;
    this.user=this.user[0];
   })
    this.editForm = fb.group({
      FirstName: ['', Validators.required],
      LastName: ['', Validators.required],
      email: ['', [Validators.required,Validators.email]],
      mobile : ['',Validators.required],
      country : ['',Validators.required],
      region : ['',Validators.required],
      birthDate : ['',[Validators.required]],
    });
    this.refreshUserData();
  }

  edit(){


    this.us.updateUser(this.user.id,this.editForm.value).subscribe((data) => {
      Swal.fire({
        icon: 'success',
        title: 'User has been updated',
        showConfirmButton: false,
        timer: 1500
      })
         })

        this.refreshUserData();
  }





  upload(event:any) {

    const elem = event.target;
    if (elem.files.length > 0)
    {
      console.log(event.target.value);

      const formData = new FormData();
      formData.append('file',  elem.files[0]      );
      this.httpclient.post('https://127.0.0.1:8000/usern/uploadImageu/'+this.user.id, formData).subscribe(
        (data:any) => {
this.refreshUserData();
        }
      );

      }
    }










  refreshUserData(){
    let user = this.aus.getUserFromToken(this.aus.getToken());
    this.us.getUserByemail(user.username).subscribe((data) => {
      user = data;
      this.useremail=user[0].email || ""
      this.image=this.back_URL+'/uploads/images/products/'+user[0].image;
      const date = new Date(user[0].birthDate.timestamp* 1000).toISOString().slice(0, 10);
      this.editForm.setValue({
        FirstName:  user[0].FirstName || "",
        LastName: user[0].LastName  || "",
        email: user[0].email  || "",
        mobile : user[0].Number  || "",
        country : user[0].Country  || "",
        region : user[0].Region  || "",
        birthDate: date  || "",
        image : user[0].image
        });
    })
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
  set birthDate(value) {
    this.birthDate = value;
  }
  get birthDate(){
    return this.editForm.get('birthDate');
  }
  set mobile(value) {
    this.birthDate = value;
  }
  get mobile(){
    return this.editForm.get('mobile');
  }
  set country(value) {
    this.birthDate = value;
  }
  get country(){
    return this.editForm.get('country');
  }
  set region(value) {
    this.birthDate = value;
  }
  get region(){
    return this.editForm.get('region');
  }
  ngOnInit(): void {

  }
}
