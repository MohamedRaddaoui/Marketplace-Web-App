import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MypocketRoutingModule } from './mypocket-routing.module';
import { MypocketComponent } from './mypocket.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MypocketComponent
  ],
  imports: [
    CommonModule,
    MypocketRoutingModule,
    ReactiveFormsModule
  ]
})
export class MypocketModule { }
