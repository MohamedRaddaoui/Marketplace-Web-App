import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllreqRoutingModule } from './allreq-routing.module';
import { AllreqComponent } from './allreq.component';


@NgModule({
  declarations: [
    AllreqComponent
  ],
  imports: [
    CommonModule,
    AllreqRoutingModule
  ]
})
export class AllreqModule { }
