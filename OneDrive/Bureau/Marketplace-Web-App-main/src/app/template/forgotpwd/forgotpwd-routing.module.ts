import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotpwdComponent } from './forgotpwd/forgotpwd.component';

const routes: Routes = [
  {path: '', component:ForgotpwdComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForgotpwdRoutingModule { }
