import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuctionroomComponent } from './auctionroom.component';

const routes: Routes = [
  {path: '', component:AuctionroomComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuctionroomRoutingModule { }
