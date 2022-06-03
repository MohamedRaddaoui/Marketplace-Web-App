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
    this.refreshData()
   }

  ngOnInit(): void {
  }
  onFileSelect(event:any){
    this.imgfile = event.target.files[0]
    /*this.image.setValue(file)*/
  }
  add(){
    const formData = new FormData();
   /* formData.append('designation',this.designation.value)
    formData.append('description',this.description.value)
    formData.append('quantity',this.quantity.value)

    formData.append('image',this.imgfile)
    formData.append('subscriber',this.user.id)*/
    this.productForm.value['image']=this.imgfile1

    this.productForm.value['subscriber']=this.user.id
    console.log(this.productForm.value)

    this.ps.addProduct(this.productForm.value).subscribe((response) => {
      Swal.fire({
        icon: 'success',
        title: 'Product has been added',
        showConfirmButton: false,
        timer: 1500
      })
      this.refreshData()
    })
    }
    update(){
          let fd = new FormData()
          fd.append("designation",this.designation)
          fd.append("description",this.description)
          fd.append("quantity",this.quantity)
          fd.append("image",this.imgfile)
          fd.append("subscriber",this.user.id)


          this.uproductForm.value['file']=    this.imgfile1


          this.uproductForm.value['subscriber']=this.user.id
          //this.uproductForm.value['quantity']= parseInt(this.uproductForm.value['quantity'])
          console.log(this.uproductForm.value)

          this.ps.updateProduct(this.uproductForm.value,this.uproductForm.value['id']).subscribe((response) => {
            //if(this.imgfile) this.upload(this.uproductForm.value['id'])
            console.log(response)
            Swal.fire({
              icon: 'success',
              title: 'Product has been updated',
              showConfirmButton: false,
              timer: 1500
            })
            this.refreshData()
          })
        }
        getProductData(product:any){
          this.img=product.image
          console.log(product.image.slice(  product.image.lastIndexOf('/')+1,  product.image.length))
          this.uproductForm.setValue({
            id:product.id || "",
            designation :  product.designation || "",
            description : product.description  || "",
            quantity : product.quantity  || 0,
            image: ""
          })
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
      this.refreshData()
    },() => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Product already in auction <br> you can\'t delete it! ',
        showConfirmButton: false,
        timer: 1500
      })
    })
  }
  refreshData(){
    let user = this.aus.getUserFromToken(this.aus.getToken());
    this.us.getUserByemail(user.username).subscribe(data =>{
      user=data
      user=user[0]
      this.user=user
      this.productArray=user.products
      this.productArray.forEach((product : any) => {
      product.image=	this.back_URL+'/uploads/images/products/'+product.image
})
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




  upload(event:any,id:any) {

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
