import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyauctionsRoutingModule } from './myauctions-routing.module';
import { MyauctionsComponent } from './myauctions.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MyauctionsComponent
  ],
  imports: [
    CommonModule,
    MyauctionsRoutingModule,
    ReactiveFormsModule
  ]
})
export class MyauctionsModule { }
