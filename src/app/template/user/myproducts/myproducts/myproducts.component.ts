import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductsService } from 'src/app/services/products/products.service';
import { UserAuthService } from 'src/app/services/user/user-auth.service';
import { UserService } from 'src/app/services/user/user.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-myproducts',
  templateUrl: './myproducts.component.html',
  styleUrls: ['./myproducts.component.css']
})
export class MyproductsComponent implements OnInit {
  productArray : any = null
  productForm : any
  uproductForm : any
  back_URL = environment.URL_Api
  img:any

  constructor(private ps:ProductsService,private us:UserService, private aus:UserAuthService, private fb:FormBuilder) {
    let user = this.aus.getUserFromToken(this.aus.getToken());
    this.us.getUserByemail(user.userdescription).subscribe(data =>{

      user=data
      user=user[0]

this.productArray=user.products
this.productArray.forEach((product : any) => {
  product.image=	this.back_URL+'/uploads/images/products/'+product.image

})
      console.log(user)
    } )
     this.productForm = fb.group({
      designation: ['', Validators.required],
      description: ['', Validators.required],
      quantity: ['', Validators.required],
      //image : ['',Validators.required]
    })
/*     this.uproductForm = fb.group({
      udesignation: ['', Validators.required],
      udescription: ['', Validators.required],
      uquantity: ['', Validators.required],
      image : ['',Validators.required]
    })*/


   }

  ngOnInit(): void {
  }
  onFileSelect(event:any){
    let file = event.target.files[0]
    /*this.image.setValue(file)*/
  }
  add(){
/*    let fd = new FormData()
    fd.append("designation",this.designation)
    fd.append("description",this.description)
    fd.append("image",this.image)*/

    this.ps.addProduct(this.productForm.value).subscribe((response) => {
      Swal.fire({
        icon: 'success',
        title: 'Product has been added',
        showConfirmButton: false,
        timer: 1500
      })
    })
  }
  update(){
/*    let fd = new FormData()
    fd.append("designation",this.designation)
    fd.append("description",this.description)
    fd.append("image",this.image) */
    this.ps.addProduct(this.uproductForm.value).subscribe((response) => {
      Swal.fire({
        icon: 'success',
        title: 'Product has been updated',
        showConfirmButton: false,
        timer: 1500
      })
    })
  }
  getProductData(product:any){
    this.productForm.setValue({
      designation :  product.designation || "",
      description : product.description  || "",
      quantity : product.quantity  || ""
    }

    );this.img=product.image
  }
  deleteProduct(id:any,index:any){
    this.ps.deleteProduct(id).subscribe(() => {
      Swal.fire({
        icon: 'success',
        title: 'Product has been deleted',
        showConfirmButton: false,
        timer: 1500
      })
      this.productArray.splice(index, 1)
    })
  }
  get designation(){
    return this.productForm.get('designation');
  }
  set designation(value) {
    this.designation = value;
  }
  get description(){
    return this.productForm.get('description');
  }
  set description(value) {
    this.description = value;
  }
  get quantity(){
    return this.productForm.get('quantity');
  }
  set quantity(value) {
    this.quantity = value;
  }
}
