import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MywishlistRoutingModule } from './mywishlist-routing.module';
import { MywishlistComponent } from './mywishlist.component';


@NgModule({
  declarations: [
    MywishlistComponent
  ],
  imports: [
    CommonModule,
    MywishlistRoutingModule
  ]
})
export class MywishlistModule { }
