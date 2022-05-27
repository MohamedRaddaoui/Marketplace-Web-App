import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MywishlistComponent } from './mywishlist.component';

const routes: Routes = [
  {path: '', component:MywishlistComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MywishlistRoutingModule { }
