import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductsService } from 'src/app/services/products/products.service';
import { UserAuthService } from 'src/app/services/user/user-auth.service';
import { UserService } from 'src/app/services/user/user.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-myproducts',
  templateUrl: './myproducts.component.html',
  styleUrls: ['./myproducts.component.css']
})
export class MyproductsComponent implements OnInit {
  productArray : any = null
  productForm : any
  back_URL = environment.URL_Api
  img:any

  constructor(private ps:ProductsService,private us:UserService, private aus:UserAuthService, private fb:FormBuilder) {
    let user = this.aus.getUserFromToken(this.aus.getToken());
    this.us.getUserByemail(user.username).subscribe(data =>{

      user=data
      user=user[0]

this.productArray=user.products
this.productArray.forEach((product : any) => {
  product.image=	this.back_URL+'/uploads/images/products/'+product.image

})
      console.log(user)
    } )
     this.productForm = fb.group({
      brand: ['', Validators.required],
      name: ['', Validators.required],
      image : ['',Validators.required],
    })


   }

  ngOnInit(): void {
  }
  onFileSelect(event:any){
    let file = event.target.files[0]
    this.image.setValue(file)
  }
  add(){
    let fd = new FormData()
    fd.append("brand",this.brand)
    fd.append("name",this.name)
    fd.append("image",this.image)
    this.ps.addProduct(fd).subscribe((response) => console.log(response))
  }
  getProductData(product:any){
    console.log(product)
    this.productForm.setValue({
      brand :  product.designation || "",
      name : product.description  || "",
      image:""
    }

    );this.img=product.image
  }
  deleteProduct(id:any,index:any){
    this.ps.deleteProduct(id).subscribe(() => this.productArray.splice(index, 1))
  }
  get brand(){
    return this.productForm.get('brand');
  }
  set brand(value) {
    this.brand = value;
  }
  get name(){
    return this.productForm.get('name');
  }
  set name(value) {
    this.name = value;
  }
  get image(){
    return this.productForm.get('image');
  }
  set image(value) {
    this.image = value;
  }
}
