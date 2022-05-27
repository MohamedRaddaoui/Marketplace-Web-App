import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-allreq',
  templateUrl: './allreq.component.html',
  styleUrls: ['./allreq.component.css']
})
export class AllreqComponent implements OnInit {
dataarray:any
dataarray2:any
  constructor(private http:HttpClient) {
this.http.get('https://127.0.0.1:8000/usern/FindbyrequestAuc/inprogress').subscribe(data=>{
this.dataarray=data,

(this.dataarray.Date=10000)
});


this.http.get('https://127.0.0.1:8000/usern/FindbyrequestRAuc/inprogress').subscribe(data=>{
this.dataarray2=data,

(this.dataarray2.Date=10000)
});
  }

  ngOnInit(): void {



  }



  changestatus(id:any,x:string,i:number){

    this.http.post('https://127.0.0.1:8000/usern/auctstatus/'+id+'/'+x,null).subscribe(data=>{
console.log(data)
this.dataarray.splice(i,1)
      });

  }
  changestatusr(id:any,x:string,i:number){

    this.http.post('https://127.0.0.1:8000/usern/Rauctstatus/'+id+'/'+x,null).subscribe(data=>{
console.log(data)
this.dataarray2.splice(i,1)
      });

  }

}
