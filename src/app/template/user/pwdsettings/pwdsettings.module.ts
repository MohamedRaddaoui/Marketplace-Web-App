import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PwdsettingsRoutingModule } from './pwdsettings-routing.module';
import { PwdsettingsComponent } from './pwdsettings/pwdsettings.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material/material.module';


@NgModule({
  declarations: [
    PwdsettingsComponent
  ],
  imports: [
    CommonModule,
    PwdsettingsRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class PwdsettingsModule { }
