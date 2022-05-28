import { Component, OnInit } from '@angular/core';
import { AuctionService } from 'src/app/services/auction/auction.service';
import { CategoryService } from 'src/app/services/category/category.service';
import { ProductsService } from 'src/app/services/products/products.service';
import { UserAuthService } from 'src/app/services/user/user-auth.service';
import { WishlistService } from 'src/app/services/wishlist/wishlist.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reverse',
  templateUrl: './reverse.component.html',
  styleUrls: ['./reverse.component.css']
})
export class ReverseComponent implements OnInit {

  back_URL = environment.URL_Api
  auctionsArray : any = null
  searchText : string = ""
  totalRecords : any
  page : string = ""
  categoryArray : any
  date : number = 0
  constructor(private aucs:AuctionService, private cs:CategoryService, private prs:ProductsService, private ws:WishlistService, private aus:UserAuthService) {
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
    this.aucs.getallrAuctions().subscribe(response => {
      this.auctionsArray = response
      console.log(response)
      this.auctionsArray.forEach((auction : any) => {
          auction.image=	this.back_URL+'/uploads/images/products/'+auction.products.image


      })
    });
   }
  ngOnInit(): void {
  }

  calculateDiff(dateSent: string | number | Date){
    dateSent = new Date(dateSent);
    let now = new Date();
    let Time = dateSent.getTime() - now.getTime();
    return ( Time / (1000 * 3600 * 24))}

addDays(days : number): Date{
  let futureDate = new Date();
  futureDate. setDate(futureDate. getDate() + days);
  console.log(futureDate)
  return futureDate;
  }

  addToWishlist(aucId:any,prodId:any){
    let user = this.aus.getUserFromToken(this.aus.getToken());
    let obj = {
      auctionId : aucId,
      productId : prodId
    }
      this.ws.addToWishlist(user.id,obj).subscribe((response)=>{
        Swal.fire({
        icon: 'success',
        title: 'Auction has been added to wishlist!',
        showConfirmButton: false,
        timer: 1500
      })
    })
  }
}
