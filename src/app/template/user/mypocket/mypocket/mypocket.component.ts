import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PocketService } from 'src/app/services/pocket/pocket.service';
import { UserAuthService } from 'src/app/services/user/user-auth.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-mypocket',
  templateUrl: './mypocket.component.html',
  styleUrls: ['./mypocket.component.css']
})
export class MypocketComponent implements OnInit {

  currentBalance : any
  pocketForm : any

  constructor(private pcks:PocketService,private us:UserService, private aus:UserAuthService, private fb:FormBuilder,private route:Router) {
    let user = this.aus.getUserFromToken(this.aus.getToken());
    this.pcks.getUserpocketById(user.id).subscribe((response)=> this.currentBalance = response);
    this.pocketForm = fb.group({
      balance: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  purchase(){
    this.route.navigate(['/purchase-subscription',{queryParams:{Ammount:this.currentBalance}}])
  }
  get balance(){
    return this.pocketForm.get('balance');
  }
  set balance(value) {
    this.balance = value;
  }

}
