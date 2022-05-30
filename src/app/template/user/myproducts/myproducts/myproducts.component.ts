import { HttpClient } from '@angular/common/http';
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
  imgfile:any
imgfile1:any
user:any
  constructor(private httpclient:HttpClient,private ps:ProductsService,private us:UserService, private aus:UserAuthService, private fb:FormBuilder) {
    let user = this.aus.getUserFromToken(this.aus.getToken());
    this.us.getUserByemail(user.username).subscribe(data =>{
      user=data
      user=user[0]
      this.user=user
      console.log(user)

this.productArray=user.products
this.productArray.forEach((product : any) => {
  product.image=	this.back_URL+'/uploads/images/products/'+product.image

})
    } )
     this.productForm = fb.group({
      designation: ['', Validators.required],
      description: ['', Validators.required],
      quantity: ['', Validators.required],
      image : ['',Validators.required]
    })
     this.uproductForm = fb.group({
       id:[''],
      designation: ['', Validators.required],
      description : ['', Validators.required],
      quantity : ['', Validators.required],
      image : ['',Validators.required]
    })


   }

  ngOnInit(): void {
  }
  onFileSelect(event:any){
    this.imgfile = event.target.files[0]
    /*this.image.setValue(file)*/
  }
  add(){
    let fd = new FormData()
    fd.append("designation",this.designation)
    fd.append("description",this.description)
    fd.append("image",this.imgfile)
    fd.append("subscriber","api/userns/"+this.user.id)
    console.log(fd)
    /*this.productForm.value['image']=this.imgfile1
    console.log(this.user)
    this.productForm.value['subscriber']="api/userns/"+this.user.id
    console.log(this.productForm.value)*/
    this.ps.addProduct(fd).subscribe((response) => {
      Swal.fire({
        icon: 'success',
        title: 'Product has been added',
        showConfirmButton: false,
        timer: 1500
      })
      this.constructor()    
    })
  }
  update(){
/*    let fd = new FormData()
    fd.append("designation",this.designation)
    fd.append("description",this.description)
    fd.append("image",this.image) */
    console.log(this.uproductForm.value)
   this.uproductForm.value['image']="";
    console.log(this.uproductForm.value)
    this.uproductForm.value['quantity']= parseInt(this.uproductForm.value['quantity'])
    this.ps.updateProduct(this.uproductForm.value,this.uproductForm.value['id']).subscribe((response) => {
      if(this.imgfile) this.upload(this.uproductForm.value['id'])
      Swal.fire({
        icon: 'success',
        title: 'Product has been updated',
        showConfirmButton: false,
        timer: 1500
      })
      this.constructor()    
    })
  }
  getProductData(product:any){
    this.uproductForm.setValue({
      id:product.id || "",
      designation :  product.designation || "",
      description : product.description  || "",
      quantity : product.quantity  || 0,
      image: product.image || ""
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
      this.constructor()    
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




  upload(id:any) {


      const formData = new FormData();
      formData.append('file',     this.imgfile       );
      this.httpclient.post('https://127.0.0.1:8000/usern/uploadImage/'+id, formData).subscribe(
        (data:any) => {
          console.log(data);
        }
      );



  }
   addimg(event:any) {

    const elem = event.target;
    if (elem.files.length > 0)
    {
      console.log(event.target.value);

      const formData = new FormData();
      formData.append('file',  elem.files[0]      );
      this.httpclient.post('https://127.0.0.1:8000/usern/addimg/', formData).subscribe(
        (data:any) => {
          console.log(data);
this.imgfile1=data
this.imgfile1=this.imgfile1.result
        }
      );

      }

  }

  get image(){
    return this.productForm.get('image');
  }
  set image(value) {
    this.image = value;
  }

}
