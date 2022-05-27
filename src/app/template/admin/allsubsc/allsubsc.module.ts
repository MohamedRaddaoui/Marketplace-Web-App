import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllsubscRoutingModule } from './allsubsc-routing.module';
import { AllsubscComponent } from './allsubsc.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AllsubscComponent
  ],
  imports: [
    CommonModule,
    AllsubscRoutingModule,    ReactiveFormsModule

  ]
})
export class AllsubscModule { }
