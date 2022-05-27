import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountdownModule } from 'ngx-countdown';
import { AuctionroomRoutingModule } from './auctionroom-routing.module';
import { AuctionroomComponent } from './auctionroom.component';


@NgModule({
  declarations: [
    AuctionroomComponent
  ],
  imports: [
    CommonModule,
    AuctionroomRoutingModule,
    CountdownModule
  ]
})
export class AuctionroomModule { }
