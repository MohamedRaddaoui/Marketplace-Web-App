import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PurchaseSubRoutingModule } from './purchase-sub-routing.module';
import { PurchaseSubComponent } from './purchase-sub/purchase-sub.component';


@NgModule({
  declarations: [
    PurchaseSubComponent
  ],
  imports: [
    CommonModule,
    PurchaseSubRoutingModule,
    ReactiveFormsModule
  ]
})
export class PurchaseSubModule { }
