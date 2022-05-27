import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-allauct',
  templateUrl: './allauct.component.html',
  styleUrls: ['./allauct.component.css']
})
export class AllauctComponent implements OnInit {
  dataarray:any
  dataarray1:any
  temp:any
  d :any
  constructor(private http:HttpClient) {
    this.http.get('https://127.0.0.1:8000/api/auctions').subscribe(data=>{
      this.dataarray=data,

      this.dataarray.forEach((element:any) => {

        element.Date= element.Date.substr(0 , 10)

      this.http.get('https://127.0.0.1:8000'+element.usern).subscribe(data1=>{
        this.temp=data1


        element.usern=  this.temp.email





      });
      this.http.get('https://127.0.0.1:8000'+element.products).subscribe(data1=>{
        this.temp=data1


        element.products=  this.temp.description





      });
    });
      (this.dataarray.Date=10000)

      });









          this.http.get('https://127.0.0.1:8000/api/reverse_auctions').subscribe(data=>{
      this.dataarray1=data,
      this.dataarray1.forEach((element:any) =>{ element.Date= element.Date.substr(0 , 10)




        this.http.get('https://127.0.0.1:8000'+element.usern).subscribe(data1=>{
          this.temp=data1


          element.usern=  this.temp.email





        });
        this.http.get('https://127.0.0.1:8000'+element.products).subscribe(data1=>{
          this.temp=data1


          element.products=  this.temp.description





        });







      });



      (this.dataarray1.Date=10000)
      });



   }

  ngOnInit(): void {
  }



  deleteauc(id:any,i:any){

    this.http.delete('https://127.0.0.1:8000/api/auctions/'+id).subscribe(data=>{
console.log(data)
this.dataarray.splice(i,1)
      });

  }
  deleterauc(id:any,i:any){

    this.http.delete('https://127.0.0.1:8000/api/reverse_auctions/'+id).subscribe(data=>{
console.log(data)
this.dataarray1.splice(i,1)
      });

  }
}
