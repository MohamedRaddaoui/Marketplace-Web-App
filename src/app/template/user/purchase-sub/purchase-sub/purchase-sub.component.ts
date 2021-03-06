import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PocketService } from 'src/app/services/pocket/pocket.service';
import { SubcriptiontypeService } from 'src/app/services/sub/subcriptiontype.service';
import { UserAuthService } from 'src/app/services/user/user-auth.service';
import { UserService } from 'src/app/services/user/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-purchase-sub',
  templateUrl: './purchase-sub.component.html',
  styleUrls: ['./purchase-sub.component.css']
})
export class PurchaseSubComponent implements OnInit {
  user : any
  purchaseForm : any
  subId : any = null;
  ammount : any = null;
  subName : any
  sub : any
  constructor(fb:FormBuilder,private ss:SubcriptiontypeService,private router:ActivatedRoute, private as:UserService,public aus:UserAuthService, private pks:PocketService,private route:Router) {
    this.purchaseForm = fb.group({
      fullname: ['', Validators.required],
      cardnumber: ['', Validators.required],
      expiry: ['', [Validators.required]],
      cvv: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipcode: ['', Validators.required]
      })
      this.subId  = this.router.snapshot.queryParams['SubType'] || null
      this.ammount  = this.router.snapshot.queryParams['Ammount'] || null
      console.log( this.router.snapshot)

      if(this.subId){
        this.ss.getSub(this.subId).subscribe((response) => {
          this.sub = response
          this.subName = this.sub.name
        })
      }
      let token : any = this.aus.getToken();
      this.user = this.aus.getUserFromToken(token);
      this.as.getUserByemail(this.user.username).subscribe((data) => {
        this.user = data;
        this.user = this.user[0];
      })
   }

  ngOnInit(): void {
  }

  purchase(){

    if(this.subId){
      this.user.Subscription = this.sub

      console.log(this.user.id)
      this.as.updateUser2(this.user.id,this.user.Subscription.id).subscribe((response) => {
        Swal.fire({
        icon: 'success',
        title: '<b>Congrats!</b> you have purchased a subscription.',
        showConfirmButton: false,
        timer: 1500
      })
    })
    }else if (this.ammount){
      this.as.addtopck(this.user.id,this.ammount).subscribe((response) => {
        Swal.fire({
        icon: 'success',
        title: '<b>Congrats!</b> you have recharged your pocket.',
        showConfirmButton: false,
        timer: 1500
      })
        this.route.navigate(['myprofile/my-pocket']);
      })


    }
  }
  get fullname() {
    return this.purchaseForm.get("fullname");
  }
  set fullname(value) {
    this.fullname = value;
  }
  get cardnumber() {
    return this.purchaseForm.get("cardnumber");
  }
  set cardnumber(value) {
    this.cardnumber = value;
  }
  get expiry() {
    return this.purchaseForm.get("expiry");
  }
  set expiry(value) {
    this.expiry = value;
  }
  get cvv() {
    return this.purchaseForm.get("cvv");
  }
  set cvv(value) {
    this.cvv = value;
  }
  get address() {
    return this.purchaseForm.get("address");
  }
  set address(value) {
    this.address = value;
  }
  get city() {
    return this.purchaseForm.get("city");
  }
  set city(value) {
    this.city = value;
  }
  get state() {
    return this.purchaseForm.get("state");
  }
  set state(value) {
    this.state = value;
  }
  get zipcode() {
    return this.purchaseForm.get("zipcode");
  }
  set zipcode(value) {
    this.zipcode = value;
  }

}
