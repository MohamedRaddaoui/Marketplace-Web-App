import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  back_URL = environment.URL_Api

  constructor(private httpclient:HttpClient) {

   }
   getallProducts(){
    return this.httpclient.get(this.back_URL +'/api/auctions')
   }
   getallUserProductsById(id:any){
    return this.httpclient.get(this.back_URL +`/usern/Findproducts/${id}`)
   }
  getProduct (id:any){
    return this.httpclient.get(this.back_URL +`/api/products/${id}`)
  }
  getProductByAuctionId (id:any){
    return this.httpclient.get(this.back_URL +`/usern/Findprod/${id}`)
  }
  addProduct (profil:any){
    return this.httpclient.post(this.back_URL +'/usern/addprod',profil)
  }
  deleteProduct(id:any){
    return this.httpclient.delete(this.back_URL +`/api/products/${id}`)
  }
  updateProduct(newProduct:any, id:any){
    return this.httpclient.put(this.back_URL +`/api/products/${id}`,newProduct)
  }
}
