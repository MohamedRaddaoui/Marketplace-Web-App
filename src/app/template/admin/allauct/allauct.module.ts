import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllauctRoutingModule } from './allauct-routing.module';
import { AllauctComponent } from './allauct.component';


@NgModule({
  declarations: [
    AllauctComponent
  ],
  imports: [
    CommonModule,
    AllauctRoutingModule
  ]
})
export class AllauctModule { }
