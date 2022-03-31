import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReverseRoutingModule } from './reverse-routing.module';
import { ReverseComponent } from './reverse/reverse.component';


@NgModule({
  declarations: [
    ReverseComponent
  ],
  imports: [
    CommonModule,
    ReverseRoutingModule
  ]
})
export class ReverseModule { }
