import { Component, OnInit } from '@angular/core';
import { AuctionService } from 'src/app/services/auction/auction.service';
import { CategoryService } from 'src/app/services/category/category.service';
import { ProductsService } from 'src/app/services/products/products.service';
import { WishlistService } from 'src/app/services/wishlist/wishlist.service';
import { UserAuthService } from 'src/app/services/user/user-auth.service';
import { environment } from 'src/environments/environment';
import { UserService } from 'src/app/services/user/user.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-auction',
  templateUrl: './auction.component.html',
  styleUrls: ['./auction.component.css']
})
export class AuctionComponent implements OnInit {
  back_URL = environment.URL_Api
  auctionsArray : any = null
  searchText : string = ""
  totalRecords : any
  page : string = ""
  categoryArray : any
  constructor(private aucs:AuctionService, private cs:CategoryService, private prs:ProductsService, private ws:WishlistService, private aus:UserAuthService,private as:UserService) {

  this.aucs.StartAuctions().subscribe(response => {


    console.log(response);
  });
  this.aucs.CloseAuctions().subscribe(response => {


    console.log(response);
  });

    this.cs.getallCategories().subscribe(response => {
      this.categoryArray = response
      this.categoryArray.forEach((category : any , index : number)=> {
        if (category.subCategories.length != 0){
        let subCategoryLink = category.subCategories
          subCategoryLink.forEach((subCategory : any) => {
            this.categoryArray[index].subCategories = []
              this.cs.getsubcategory(subCategory).subscribe(response => {
                this.categoryArray[index].subCategories.push(response)
              })
          })
        }
      })
      console.log(this.auctionsArray)
    });
    this.aucs.getallAuctions().subscribe(response => {
      this.auctionsArray = response
      console.log(response)
      this.auctionsArray.forEach((auction : any) => {
        this.prs.getProductByAuctionId(auction.id).subscribe((response)=>{
          auction.product = response;
          auction.image=	this.back_URL+'/uploads/images/products/'+auction.product.image;
        })
        auction.Date = new Date(auction.Date.timestamp * 1000).toISOString().slice(0, 10);
      })
    });
   }
  ngOnInit(): void {
  }
  addToWishlist(aucId:any){
    let user = this.aus.getUserFromToken(this.aus.getToken());
    this.as.getUserByemail(user.username).subscribe((response) => {
      user = response
      this.ws.addToWishlist(user[0].id,aucId).subscribe((response)=>{
        console.log(response);
        Swal.fire({
          icon: 'success',
          title: 'Your Auction has been saved',
          showConfirmButton: false,
          timer: 1500
        })
      })
    })
  }
  changefilter(type : any){
    if(type == "prochain"){
      this.auctionsArray = this.auctionsArray.filter((auction : any) => auction.etat == "prochain")
    }else if(type == "encours"){
      this.auctionsArray = this.auctionsArray.filter((auction : any) => auction.etat == "encours")
    }else if (type == "terminer"){
      this.auctionsArray = this.auctionsArray.filter((auction : any) => auction.etat == "terminer")
    }
  }
}

