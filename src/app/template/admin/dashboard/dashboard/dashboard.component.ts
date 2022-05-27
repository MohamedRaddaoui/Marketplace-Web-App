import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  saleDataa :any;
  saleDat:any;
  saled:any;
  saledd:any;
temp:any;
  sub:any=''
  auc:any
  gan:any
  por:any
  obj:any
  aucper:any;
  constructor( private httpclient:HttpClient) {

    this.httpclient.get('https://127.0.0.1:8000/usern/countuser').subscribe(data=>{
     this.sub = data;
     this.sub[0].trois--
this.por =(this.sub[0].un*100)/ this.sub[0].trois
document.getElementById("h1")!.style.width=this.por+"%";


      }); this.httpclient.get('https://127.0.0.1:8000/usern/COUNTAucSt').subscribe(data=>{
     this.aucper = data;

console.log( this.aucper)


      });



      this.httpclient.get('https://127.0.0.1:8000/usern/countAuc').subscribe(data=>{
       this.auc = data;
  this.auc =  this.auc[0].un+this.auc[0].deux


        });
          this.httpclient.get('https://127.0.0.1:8000/usern/COUNTSubmoney').subscribe(data=>{
       this.gan = data;
  this.gan =  this.gan[0].deux+this.gan[1].deux


        });
        this.httpclient.get('https://127.0.0.1:8000/usern/COUNTSubscuser').subscribe(data=>{

         this.saleDataa = data;

          });


          this.httpclient.get('https://127.0.0.1:8000/usern/aucmonth').subscribe(data=>{
            this.saledd  = [
              { name: "1", value: 0},
              { name: "2", value: 0 },
              { name: "3", value: 0 },
              { name: "4", value: 0 },
              { name: "5", value: 0 },
              { name: "6", value: 0 },
              { name: "7", value: 0 },
              { name: "8", value: 0 },
              { name: "9", value: 0 },
              { name: "10", value: 0 },
              { name: "11", value: 0 },
              { name: "12", value: 0 },
            ];



            this.saled = data;
            for (var i = 0; i <   this.saled.length; i++){

              for (var j = 0; j <   this.saledd.length; j++){

              if(this.saled[i].gBmonth== parseInt(this.saledd[j].name))
              {
                this.saledd[j].value=this.saledd[j].value+this.saled[i].Auction

              }


              }

            }
            console.log( this.saledd)



            });


          this.httpclient.get('https://127.0.0.1:8000/usern/countAucRe').subscribe(data=>{


            this.saleDat = [
              { name: "Auction", value: 0},
              { name: "ReverseAuction", value: 0 },

            ];
            this. temp=data;
            this.saleDat[0].value =  this. temp[0].Auction;
            this.saleDat[1].value =  this. temp[0].ReverseAuction;

             });

   }



  ngOnInit(): void {

  }


}
