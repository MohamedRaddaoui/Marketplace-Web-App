import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuctionService } from 'src/app/services/auction/auction.service';
import { UserAuthService } from 'src/app/services/user/user-auth.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-myauctions',
  templateUrl: './myauctions.component.html',
  styleUrls: ['./myauctions.component.css']
})
export class MyauctionsComponent implements OnInit {
  auctionArray : any = null
  reverseAuctionArray : any = null;
  productsArray : any = null;
  auctionForm : any
  re_auctionForm : any
  constructor(private aucs:AuctionService, private us:UserService, private aus:UserAuthService, private fb:FormBuilder) {
    this.auctionForm = fb.group({
      price: ['', Validators.required],
      auctionDate: ['', Validators.required],
      productname : ['',Validators.required],
    })
    this.re_auctionForm = fb.group({
      title: ['', Validators.required],
      re_auctionDate: ['', Validators.required],
      re_productname : ['',Validators.required],
    })

    let user = this.aus.getUserFromToken(this.aus.getToken());
    this.us.getUserByemail(user.username).subscribe(data =>{

      user=data
      user=user[0]
      this.auctionArray=user.Auctions
      console.log(this.auctionArray)
      this.auctionArray.forEach((auction : any) => {
        auction.date = new Date(auction.date.timestamp* 1000).toISOString().slice(0, 10);

      })

      this.reverseAuctionArray=user.ReverseAuction
      this.reverseAuctionArray.forEach((auction : any) => {
        auction.date = new Date(auction.date.timestamp* 1000).toISOString().slice(0, 10);

      })
      this.productsArray=user.products
      console.log(user)
    } )


  }

    add(){
      this.aucs.addAuction(this.auctionForm.value).subscribe(data => console.log(data))
    }
    re_add(){
      this.aucs.addR_auction(this.auctionForm.value).subscribe(data => console.log(data))
    }
    getAuctionData(auction : any){
      this.auctionForm.setValue({
        price:  auction.price || "",
        auctionDate: auction.date  || "",
        productname: auction.prodname  || ""
      });
    }
    getRe_AuctionData(auction : any){
      this.re_auctionForm.setValue({
        price:  auction.price || "",
        re_auctionDate: auction.date  || "",
        re_productname: auction.prodname  || ""
      });
    }
    deleteAuction(id:any, index:any){
      this.aucs.deleteAuction(id).subscribe(() => this.auctionArray.splice(index, 1))
    }
    deleteRe_Auction(id:any, index:any){
      this.aucs.deleteR_auction(id).subscribe(() => this.reverseAuctionArray.splice(index, 1))
    }
    get price(){
      return this.auctionForm.get('price');
    }
    set price(value) {
      this.price = value;
    }
    get auctionDate(){
      return this.auctionForm.get('auctionDate');
    }
    set auctionDate(value) {
      this.auctionDate = value;
    }
    get productname(){
      return this.auctionForm.get('productname');
    }
    set productname(value) {
      this.productname = value;
    }
    get title(){
      return this.re_auctionForm.get('title');
    }
    set title(value) {
      this.title = value;
    }
    get re_auctionDate(){
      return this.re_auctionForm.get('re_auctionDate');
    }
    set re_auctionDate(value) {
      this.re_auctionDate = value;
    }
    get re_productname(){
      return this.re_auctionForm.get('re_productname');
    }
    set re_productname(value) {
      this.re_productname = value;
    }
    ngOnInit(): void {

    }

   }



