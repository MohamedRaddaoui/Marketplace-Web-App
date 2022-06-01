import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PocketService } from 'src/app/services/pocket/pocket.service';
import { UserAuthService } from 'src/app/services/user/user-auth.service';
import { UserService } from 'src/app/services/user/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mypocket',
  templateUrl: './mypocket.component.html',
  styleUrls: ['./mypocket.component.css']
})
export class MypocketComponent implements OnInit {

  currentBalance : any
  pocketForm : any

  constructor(private pcks:PocketService,private us:UserService, private aus:UserAuthService, private fb:FormBuilder,private route:Router) {
      this.pocketForm = fb.group({
      balance: ['', Validators.required]
    })
    this.refreshData()
  }

  ngOnInit(): void {
  }

  purchase(){
    Swal.fire({
      icon: 'success',
      title: 'You will be redirected to confirm your payment !',
      showConfirmButton: false,
      timer: 3000
    })     
    this.route.navigate(['/purchase-subscription'],{queryParams:{Ammount:this.balance.value}})
  }
  refreshData(){
    let token : any = this.aus.getToken();
    let user : any=this.aus.getUserFromToken(token);
    this.us.getUserByemail(user.username).subscribe((data) => {
      user = data;
    this.currentBalance = user[0].pocket
    });
  }
  get balance(){
    return this.pocketForm.get('balance');
  }
  set balance(value) {
    this.balance = value;
  }

}
