import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReverseauctionComponent } from './reverseauction.component';

const routes: Routes = [
  {path:'',component:ReverseauctionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReverseauctionRoutingModule { }
