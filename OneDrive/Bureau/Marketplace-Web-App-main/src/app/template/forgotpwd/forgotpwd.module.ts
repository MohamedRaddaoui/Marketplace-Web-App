import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForgotpwdRoutingModule } from './forgotpwd-routing.module';
import { ForgotpwdComponent } from './forgotpwd/forgotpwd.component';


@NgModule({
  declarations: [
    ForgotpwdComponent
  ],
  imports: [
    CommonModule,
    ForgotpwdRoutingModule
  ]
})
export class ForgotpwdModule { }
