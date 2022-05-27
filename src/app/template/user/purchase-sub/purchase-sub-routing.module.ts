import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PurchaseSubComponent } from './purchase-sub/purchase-sub.component';

const routes: Routes = [
  {path: '', component:PurchaseSubComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchaseSubRoutingModule { }
