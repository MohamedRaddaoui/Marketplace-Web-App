import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReverseauctionRoutingModule } from './reverseauction-routing.module';
import { ReverseauctionComponent } from './reverseauction.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ReverseauctionComponent
  ],
  imports: [
    CommonModule,
    ReverseauctionRoutingModule,
    ReactiveFormsModule
  ]
})
export class ReverseauctionModule { }
