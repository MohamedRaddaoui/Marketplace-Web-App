import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private Us:UserService) {
   }

  ngOnInit(): void {
  }
  cutomercount:number = 0 ;
  productcount:number = 0 ;
  transactioncount:number = 0 ;

  customercountstop:any = setInterval(() => {
    this.cutomercount++;
     if(this.cutomercount == 500){
       clearInterval(this.customercountstop);
     }
  },1)
  productcountstop:any = setInterval(() => {
    this.productcount++;
     if(this.productcount == 600){
       clearInterval(this.productcountstop);
     }
  },1)
  transactioncountstop:any = setInterval(() => {
    this.transactioncount++;
     if(this.transactioncount == 700){
       clearInterval(this.transactioncountstop);
     }
  },1)

}
