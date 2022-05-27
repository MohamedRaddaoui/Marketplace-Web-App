import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyproductsRoutingModule } from './myproducts-routing.module';
import { MyproductsComponent } from './myproducts.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MyproductsComponent
  ],
  imports: [
    CommonModule,
    MyproductsRoutingModule,
    ReactiveFormsModule
  ]
})
export class MyproductsModule { }
