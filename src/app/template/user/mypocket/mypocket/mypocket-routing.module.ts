import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MypocketComponent } from './mypocket.component';

const routes: Routes = [
  {path: '', component:MypocketComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MypocketRoutingModule { }
