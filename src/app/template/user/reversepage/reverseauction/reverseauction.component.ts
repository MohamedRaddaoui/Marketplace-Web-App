import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuctionService } from 'src/app/services/auction/auction.service';
import { OffersService } from 'src/app/services/offers/offers.service';
import { ProductsService } from 'src/app/services/products/products.service';
import { UserAuthService } from 'src/app/services/user/user-auth.service';
import { UserService } from 'src/app/services/user/user.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reverseauction',
  templateUrl: './reverseauction.component.html',
  styleUrls: ['./reverseauction.component.css']
})
export class ReverseauctionComponent implements OnInit {
  user:any
  ReversAuction:any
    offerForm : any
    offersArray : any = []
    reverseauction : any = null
    back_URL = environment.URL_Api
  offerFormUpdate: any;
  offerId: any;


  constructor(public aus:UserAuthService,private as:UserService ,private raucs:AuctionService,private route:ActivatedRoute,private ofs:OffersService,private ps:ProductsService, private fb:FormBuilder) {


    this.route.params.subscribe((params) =>
    {
      this.raucs.getR_auction(params['id']).subscribe((data) =>{
        this.reverseauction = data
        this.ReversAuction=params['id']
        this.ps.getProduct(this.reverseauction.products.slice(this.reverseauction.products.lastIndexOf('/')+1,this.reverseauction.products.length)).subscribe((response) => {
          this.reverseauction.products = response
          this.reverseauction.offers.forEach((offer: any,i:any)=> {
            this.ofs.getOffer(offer.slice(offer.lastIndexOf('/')+1,offer.length)).subscribe((response) => {
              this.offersArray.push(response) ;
              this.as.getUser( this.offersArray[i].user.slice(this.offersArray[i].user.lastIndexOf('/')+1,this.offersArray[i].user.length)).subscribe((response) => {
                this.offersArray[i].user=response
                this.offersArray[i].user.image = 	this.back_URL+'/uploads/images/products/'+this.offersArray[i].user.image;
            })
          })
        })
        this.reverseauction.products.image=	this.back_URL+'/uploads/images/products/'+   this.reverseauction.products.image;
        })
        console.log(this.reverseauction)
      })
    })
    this.offerForm = fb.group({
      Offerprice: ['', Validators.required],
      comment : ['',Validators.required]
    })

    this.offerFormUpdate = fb.group({
      Offerprice: ['', Validators.required],
      comment : ['',Validators.required]
    })

    let token : any = this.aus.getToken();
      let user : any=this.aus.getUserFromToken(token);
      this.as.getUserByemail(user.username).subscribe((data) => {
        user = data;
        this.user = user[0].id;
      })
  }

  ngOnInit(): void {
  }
  addOffer(){
    this.ofs.addOffer(this.user,this.ReversAuction,this.offerForm.value).subscribe((response) => {
      Swal.fire({
      icon: 'success',
      title: 'Offer has been added',
      showConfirmButton: false,
      timer: 1500
    })
  })
  }
  getOfferData(offer : any){
    this.offerFormUpdate.setValue({
      quantity :  offer.quantity || "",
      description : offer.description  || ""
    })
    this.offerId = offer.id
  }
  updateOffer(){
    this.ofs.updateOffer(this.offerId,this.offerFormUpdate.value).subscribe((response) => {
      Swal.fire({
      icon: 'success',
      title: 'Offer has been updated',
      showConfirmButton: false,
      timer: 1500
    })
  })
  }

  get quantity(){
    return this.offerForm.get('quantity');
  }
  set quantity(value) {
    this.quantity = value;
  }
  get price(){
    return this.offerForm.get('price');
  }
  set price(value) {
    this.price = value;
  }
  get description(){
    return this.offerForm.get('description');
  }
  set description(value) {
    this.description = value;
  }

}
