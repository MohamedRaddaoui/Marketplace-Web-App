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
      id:[''],
      Price: ['', Validators.required],
      Name: ['', Validators.required],
      Date: ['', Validators.required],
      product_id : ['', Validators.required]
    })
    this.re_auctionForm = fb.group({
      id:[''],
      Price: ['', Validators.required],
      Name: ['', Validators.required],
      Date: ['', Validators.required],
      product_id : ['', Validators.required]
    })
    this.refreshData()
  }

    add(){
      this.auctionForm.value.usern ="api/userns/"+ this.user.id
      delete this.auctionForm.value.id
      this.aucs.addAuction(this.auctionForm.value).subscribe(data => {
        Swal.fire({
          icon: 'success',
          title: 'Auction has been added',
          showConfirmButton: false,
          timer: 1500
        })
        this.refreshData()
      })
    }
    re_add(){
      this.re_auctionForm.value.usern ="api/userns/"+ this.user.id
      delete this.re_auctionForm.value.id
      this.aucs.addR_auction(this.re_auctionForm.value).subscribe(data => {
        Swal.fire({
          icon: 'success',
          title: 'Reverse auction has been added',
          showConfirmButton: false,
          timer: 1500
        })
        this.refreshData()
      })
    }
    update(){
      this.aucs.updateAuction(this.auctionForm.value["id"],this.auctionForm.value).subscribe(data => {
        Swal.fire({
        icon: 'success',
        title: 'Auction has been updated',
        showConfirmButton: false,
        timer: 1500
      })
      this.refreshData()
    })
    }
    re_update(){
      this.aucs.updateR_auction(this.re_auctionForm.value.id,this.re_auctionForm.value).subscribe(data => {
        Swal.fire({
          icon: 'success',
          title: 'Reverse auction has been updated',
          showConfirmButton: false,
          timer: 1500
        })
        this.refreshData()
      })
    }
    getAuctionData(auction : any){
      this.auctionForm.setValue({
        id:auction.id || "",
        Name:auction.Name || "",
        Price:  auction.Price || "",
        Date: auction.Date  || ""
      });
    }
    getRe_AuctionData(auction : any){
      this.re_auctionForm.setValue({
        id:auction.id || "",
        Name:auction.Name || "",
        Price:  auction.Price || "",
        Date: auction.Date  || ""
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
        this.refreshData()
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
        this.refreshData()      })
    }
    stopR_auction(id : any){
      this.aucs.StopR_auction(id.id).subscribe(() => {
        Swal.fire({
          icon: 'success',
          title: 'Reverse auction has been Stoped',
          showConfirmButton: false,
          timer: 1500
        })
        this.refreshData()
      })    
    }
    refreshData(){
      
    this.user = this.aus.getUserFromToken(this.aus.getToken());
    this.us.getUserByemail(this.user.username).subscribe(data =>{

      this.user=data
      this.user=this.user[0]
      this.auctionArray=this.user.Auctions
      this.reverseAuctionArray=this.user.ReverseAuction
      this.productsArray=this.user.products
      this.auctionArray.forEach((auction : any) => {
        auction.Date = new Date(auction.Date.timestamp* 1000).toISOString().slice(0, 10);
      })
      this.reverseAuctionArray.forEach((rauction : any) => {
        rauction.Date = new Date(rauction.Date.timestamp* 1000).toISOString().slice(0, 10);
      })
      this.productsArray=this.user.products
    } )
    }
    get Price(){
      return this.auctionForm.get('Price');
    }
    set Price(value) {
      this.Price = value;
    }
    get Date(){
      return this.auctionForm.get('Date');
    }
    set Date(value) {
      this.Date = value;
    }
    get Name(){
      return this.auctionForm.get('Name');
    }
    set Name(value) {
      this.Name = value;
    }
    get product_id(){
      return this.auctionForm.get('product_id');
    }
    set product_id(value) {
      this.product_id = value;
    }

    get re_Date(){
      return this.re_auctionForm.get('Date');
    }
    set re_Date(value) {
      this.re_Date = value;
    }
    get re_Name(){
      return this.re_auctionForm.get('Name');
    }
    set re_Name(value) {
      this.re_Name = value;
    }
    get re_Price(){
      return this.re_auctionForm.get('Price');
    }
    set re_Price(value) {
      this.re_Price = value;
    }
    get re_product_id(){
      return this.re_auctionForm.get('product_id');
    }
    set re_product_id(value) {
      this.re_product_id = value;
    }
    ngOnInit(): void {

    }

   }



