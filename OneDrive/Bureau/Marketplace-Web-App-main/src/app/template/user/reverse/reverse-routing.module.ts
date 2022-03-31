import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReverseComponent } from './reverse/reverse.component';

const routes: Routes = [
  {path: '', component:ReverseComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReverseRoutingModule { }
