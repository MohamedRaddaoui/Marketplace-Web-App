import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alluser',
  templateUrl: './alluser.component.html',
  styleUrls: ['./alluser.component.css']
})
export class AlluserComponent implements OnInit {
  dataarray:any
  dataarray1:any
  temp:any
  d :any
  constructor(private http:HttpClient) {
    this.http.get('https://127.0.0.1:8000/api/userns').subscribe(data=>{
      this.dataarray=data,
      console.log(    this.dataarray);
      this.dataarray.forEach((element:any) => {


        if( element.email=="Admin@gmail.com"){

          this.dataarray .splice(this.dataarray .indexOf(element), 1);

        }
      });
      (this.dataarray.Date=10000)

      this.dataarray.forEach((element:any) => {


        element.FirstName= element.FirstName+'  '+element.LastName

       this.http.get('https://127.0.0.1:8000'+element.subscription).subscribe(data1=>{
          this.temp=data1


          element.Subscription=  this.temp.designation






        });

    });

      });
    }

  ngOnInit(): void {
  }









  deleteauc(id:any,i:any){

    this.http.delete('https://127.0.0.1:8000/api/userns/'+id).subscribe(data=>{
console.log(data)
this.dataarray.splice(i,1)
      });

  }
}
