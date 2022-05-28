import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubcriptiontypeService } from 'src/app/services/sub/subcriptiontype.service';
import Swal from 'sweetalert2';

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
    Swal.fire({
      icon: 'success',
      title: 'You will be redirected to confirm your payment !',
      showConfirmButton: false,
      timer: 1500
    })
    this.router.navigate(['/purchase-subscription'],{queryParams:{SubType:id}})
  }
}
