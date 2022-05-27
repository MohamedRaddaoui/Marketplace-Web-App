import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuctionRoutingModule } from './auction-routing.module';
import { AuctionComponent } from './auction/auction.component';
import { MaterialModule } from 'src/app/material/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule} from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [
    AuctionComponent
  ],
  imports: [
    CommonModule,
    AuctionRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule
  ]
})
export class AuctionModule { }
