import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddsubRoutingModule } from './addsub-routing.module';
import { AddsubComponent } from './addsub.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    AddsubComponent
  ],
  imports: [
    CommonModule,
    AddsubRoutingModule,
    ReactiveFormsModule
  ]
})
export class AddsubModule { }
