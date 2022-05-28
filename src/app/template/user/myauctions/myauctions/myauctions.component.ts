import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuctionService } from 'src/app/services/auction/auction.service';
import { UserAuthService } from 'src/app/services/user/user-auth.service';
import { UserService } from 'src/app/services/user/user.service';
import Swal from 'sweetalert2';

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
  user : any
  constructor(private aucs:AuctionService, private us:UserService, private aus:UserAuthService, private fb:FormBuilder) {
    this.auctionForm = fb.group({
      price: ['', Validators.required],
      auctionDate: ['', Validators.required]
    })
    this.re_auctionForm = fb.group({
      title: ['', Validators.required],
      re_auctionDate: ['', Validators.required]
    })

    this.user = this.aus.getUserFromToken(this.aus.getToken());
    this.us.getUserByemail(this.user.username).subscribe(data =>{

      this.user=data
      this.user=this.user[0]
      this.auctionArray=this.user.Auctions
      this.reverseAuctionArray=this.user.ReverseAuction

      console.log(this.reverseAuctionArray)

      this.auctionArray.forEach((auction : any) => {
        console.log(auction)

        auction.Date = new Date(auction.Date.timestamp* 1000).toISOString().slice(0, 10);

        console.log(auction.Date)

      })


      this.reverseAuctionArray.forEach((rauction : any) => {
        console.log( rauction.date)

        rauction.Date = new Date(rauction.Date.timestamp* 1000).toISOString().slice(0, 10);

      })
      this.productsArray=this.user.products
      console.log(this.user)
    } )


  }

    add(){
      this.auctionForm.value.usern_id = this.user.id
      this.aucs.addAuction(this.auctionForm.value).subscribe(data => {
        Swal.fire({
          icon: 'success',
          title: 'Auction has been added',
          showConfirmButton: false,
          timer: 1500
        })
      })
    }
    re_add(){
      this.auctionForm.value.usern_id = this.user.id
      this.aucs.addR_auction(this.re_auctionForm.value).subscribe(data => {
        Swal.fire({
          icon: 'success',
          title: 'Reverse auction has been added',
          showConfirmButton: false,
          timer: 1500
        })
      })
    }
    update(){
      this.aucs.updateAuction(this.user.id,this.auctionForm.value).subscribe(data => {
        Swal.fire({
        icon: 'success',
        title: 'Auction has been updated',
        showConfirmButton: false,
        timer: 1500
      })
    })
    }
    re_update(){
      this.aucs.updateR_auction(this.user.id,this.re_auctionForm.value).subscribe(data => {
        Swal.fire({
          icon: 'success',
          title: 'Reverse auction has been updated',
          showConfirmButton: false,
          timer: 1500
        })
      })
    }
    getAuctionData(auction : any){
      this.auctionForm.setValue({
        price:  auction.price || "",
        auctionDate: auction.date  || ""
      });
    }
    getRe_AuctionData(auction : any){
      this.re_auctionForm.setValue({
        price:  auction.price || "",
        re_auctionDate: auction.date  || ""
      });
    }
    deleteAuction(id:any, index:any){
      this.aucs.deleteAuction(id).subscribe(() => {
        Swal.fire({
          icon: 'success',
          title: 'Auction has been deleted',
          showConfirmButton: false,
          timer: 1500
        })
        this.auctionArray.splice(index, 1)
      })
    }
    deleteRe_Auction(id:any, index:any){
      this.aucs.deleteR_auction(id).subscribe(() => {
        Swal.fire({
          icon: 'success',
          title: 'Reverse auction has been deleted',
          showConfirmButton: false,
          timer: 1500
        })     
        this.reverseAuctionArray.splice(index, 1)
      })
    }
    stopR_auction(auction : any){
      //Fonction mtaa Stop
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



