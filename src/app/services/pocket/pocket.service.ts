import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PocketService {

  back_URL = environment.URL_Api

  constructor(private httpclient:HttpClient) { }
  getallpocket(){
    return this.httpclient.get(this.back_URL +'/api/pockets/')
  }
  getUserpocketById(id:any){
    return this.httpclient.get(this.back_URL +`/api/pockets/${id}`)
  }
  getpocket (id:any){
    return this.httpclient.get(this.back_URL +`/api/pockets/${id}`)
  }
  addpocket (profil:any){
    return this.httpclient.post(this.back_URL +'/api/pockets',profil)
  }
  deletepocket(id:any){
    return this.httpclient.delete(this.back_URL +`/api/pockets/${id}`)
  }
  updatepocket(newAuction:any, id:any){
    return this.httpclient.patch(this.back_URL +`/api/pockets/${id}`,newAuction)
  }
}
