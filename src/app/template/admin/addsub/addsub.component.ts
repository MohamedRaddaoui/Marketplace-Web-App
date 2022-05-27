import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-addsub',
  templateUrl: './addsub.component.html',
  styleUrls: ['./addsub.component.css']
})
export class AddsubComponent implements OnInit {
  auctionForm : any


  messageErr=""
  constructor(private http:HttpClient,private route:Router, private fb:FormBuilder) {


    this.auctionForm = fb.group({
      designation: ['', Validators.required],
      description: ['', Validators.required],
      duration : ['',Validators.required],
      priceSubscription : ['',Validators.required],
    })
  }

  get designation(){
    return this.auctionForm.get('designation');
  }
  set designation(value) {
    this.designation = value;
  }
   get priceSubscription(){
    return this.auctionForm.get('priceSubscription');
  }
  set priceSubscription(value) {
    this.priceSubscription = value;
  }
  get description(){
    return this.auctionForm.get('description');
  }
  set description(value) {
    this.description = value;
  }
  get duration(){
    return this.auctionForm.get('duration');
  }
  set duration(value) {
    this.duration = value;
  }




  add(){
    let data
    // console.log(data)
    this.http.post('https://127.0.0.1:8000/api/subscriptiontypes', this.auctionForm.value).subscribe(response=>{
      // console.log(response)

      this.route.navigate(['/admin/allsubsc'])

    },(err:HttpErrorResponse)=>{
      this.messageErr=err.error
      // console.log(err.error)
      // console.log(err.status)
    })

  }

  getAuctionData(auction : any){
    this.auctionForm.setValue({
      designation:  auction.designation || "",
      description: auction.description  || "",
      duration: auction.duration  || "",
      priceSubscription : auction.priceSubscription  || ""
    });
  }

  ngOnInit(): void {
  }
}
