import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubcriptiontypeService } from 'src/app/services/sub/subcriptiontype.service';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {
  subArray:any
  subTypeArray = ["Normal","Pro","VIP"]
  subTypeColor = ["primary","warning","success"]

  constructor(private ss:SubcriptiontypeService,private router:Router) { 
    this.ss.getallSubscriptionTypes().subscribe((data) =>{
      this.subArray = data;
      console.log(this.subArray)
    })
  }

  ngOnInit(): void {
  }
  purchase(id:number){
    this.router.navigate(['/purchase-subscription'],{queryParams:{SubType:id}})
  }
}
