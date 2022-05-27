import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserAuthService } from 'src/app/services/user/user-auth.service';
import { UserService } from 'src/app/services/user/user.service';

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
  constructor(private fb:FormBuilder,private aus:UserAuthService, private us:UserService) {
    this.pwdForm=fb.group({
      oldpassword: ['', Validators.required],
      newpassword: ['', [Validators.required,Validators.minLength(8)]]
    })
    /*this.aus.getUserFromToken(this.aus.getToken()).subscribe((response: any) => {
      this.user = this.us.getUserByemail(response.email)
    })*/

   }

  ngOnInit(): void {
  }
  changePwd(){
      //this.user.plainpasssword = this.newpassword
      //this.us.updateUser(this.user,this.user.id)
  }
   checkPwd(){
    let user ={
      id : 10
    }
    this.aus.checkPassword(user.id, this.oldpassword.value).subscribe((response) => {
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
function changePwd() {
  throw new Error('Function not implemented.');
}

