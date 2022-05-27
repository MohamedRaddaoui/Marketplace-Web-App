import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyprofileRoutingModule } from './myprofile-routing.module';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { MaterialModule } from 'src/app/material/material/material.module';


@NgModule({
  declarations: [
    MyprofileComponent
  ],
  imports: [
    CommonModule,
    MyprofileRoutingModule,
    MaterialModule
  ]
})
export class MyprofileModule { }
