import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlluserRoutingModule } from './alluser-routing.module';
import { AlluserComponent } from './alluser.component';


@NgModule({
  declarations: [
    AlluserComponent
  ],
  imports: [
    CommonModule,
    AlluserRoutingModule
  ]
})
export class AlluserModule { }
