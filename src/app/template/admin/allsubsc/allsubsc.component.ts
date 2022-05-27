import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-allsubsc',
  templateUrl: './allsubsc.component.html',
  styleUrls: ['./allsubsc.component.css']
})
export class AllsubscComponent implements OnInit {
  auctionForm : any
  messageSuccess=""
id:any
  dataarray:any
  dataarray1:any
  temp:any
  d :any
  i:any
  constructor(private http:HttpClient,private route:Router, private fb:FormBuilder) {
    this.http.get('https://127.0.0.1:8000/api/subscriptiontypes').subscribe(data=>{
      this.dataarray=data,
      console.log(    this.dataarray);

      (this.dataarray.Date=10000)


      });
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
      let data=this.auctionForm.value
      // console.log(data)
      this.http.put('https://127.0.0.1:8000/api/subscriptiontypes/'+this.id, this.auctionForm.value).subscribe(response=>      {


          this.dataarray[this.i].designation=data.designation
          this.dataarray[this.i].description=data.description
          this.dataarray[this.i].duration=data.duration
          this.dataarray[this.i].priceSubscription=data.priceSubscription


          this.messageSuccess=`this student ${this.dataarray[this.i].designation} is updated`


        },(err:HttpErrorResponse)=>{
          console.log(err.message)

        })

    }

    getAuctionData(auction : any,id:any,i:any){
this.id=id
this.i=i
      this.auctionForm.setValue({
        designation:  auction.designation || "",
        description: auction.description  || "",
        duration: auction.duration  || "",
        priceSubscription : auction.priceSubscription  || ""
      });
    }
  ngOnInit(): void {
  }









  deleteauc(id:any,i:any){

    this.http.delete('https://127.0.0.1:8000/api/subscriptiontypes/'+id).subscribe(data=>{
console.log(data)
this.dataarray.splice(i,1)
      });

  }
}
