import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserAuthService } from 'src/app/services/user/user-auth.service';
import { UserService } from 'src/app/services/user/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pwdsettings',
  templateUrl: './pwdsettings.component.html',
  styleUrls: ['./pwdsettings.component.css']
})
export class PwdsettingsComponent implements OnInit {
  pwdForm:any
  user : any
  pwdcheck : boolean = false;
  disp : any
  show: boolean = true;
  constructor(private fb:FormBuilder,private aus:UserAuthService, private us:UserService,private as:UserService) {
    this.pwdForm=fb.group({
      oldpassword: ['', Validators.required],
      newpassword: ['', [Validators.required,Validators.minLength(8)]]
    })
    let token : any = this.aus.getToken();
    let user : any=this.aus.getUserFromToken(token);
    this.as.getUserByemail(user.username).subscribe((data:any) => {
      user = data;
this.user = user[0];
})

   }

  ngOnInit(): void {
  }
  updatepw(){
      this.user.plainpasssword = this.newpassword
      this.us.updatepw(this.user,this.newpassword).subscribe(() => {
        Swal.fire({
          icon: 'success',
          title: 'Password has been changed',
          showConfirmButton: false,
          timer: 1500
        })
      })
  }
   checkPwd(){
    this.aus.checkPassword(this.user.id, this.oldpassword.value).subscribe((response) => {
      console.log(response);
      let data: any = response;
      let code = data.code;
      if(code == 1){
        this.disp = true
      }else{
        this.pwdcheck = true
        this.show = false;
      }
    });

  }
  toggleBtn(){
    this.show = !this.show;
  }

  get newpassword(){
    return this.pwdForm.get('newpassword');
  }
  set newpassword(value) {
    this.newpassword = value;
  }
  get oldpassword(){
    return this.pwdForm.get('oldpassword');
  }
  set oldpassword(value) {
    this.oldpassword = value;
  }

}


