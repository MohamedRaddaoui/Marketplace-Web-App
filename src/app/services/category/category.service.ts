import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  back_URL = environment.URL_Api

  constructor(private httpclient:HttpClient) { }
  getallCategories(){
    return this.httpclient.get(this.back_URL +'/api/categories')
   }
  getCategory (id:any){
    return this.httpclient.get(this.back_URL +`/api/categories/${id}`)
  }
  addCategory (profil:any){
    return this.httpclient.post(this.back_URL +'/api/categories',profil)
  }
  deleteCategory(id:any){
    return this.httpclient.delete(this.back_URL +`/api/categories/${id}`)
  }
  updateCategory(newAuction:any, id:any){
    return this.httpclient.patch(this.back_URL +`/api/categories/${id}`,newAuction)
  }
  getallSubCategories(){
    return this.httpclient.get(this.back_URL +'/api/sub_categories')
   }
  getSubCategory (id:any){
    return this.httpclient.get(this.back_URL +`/api/sub_categories/${id}`)
  }
  getsubcategory (link:any){
    return this.httpclient.get(this.back_URL +link)
  }
  addSubCategory (profil:any){
    return this.httpclient.post(this.back_URL +'/api/sub_categories',profil)
  }
  deleteSubCategory(id:any){
    return this.httpclient.delete(this.back_URL +`/api/sub_categories/${id}`)
  }
  updateSubCategory(newAuction:any, id:any){
    return this.httpclient.patch(this.back_URL +`/api/sub_categories/${id}`,newAuction)
  }
}
