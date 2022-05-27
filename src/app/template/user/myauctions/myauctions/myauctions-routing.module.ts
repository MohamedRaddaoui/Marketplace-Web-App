import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyauctionsComponent } from './myauctions.component';

const routes: Routes = [
  {path: '', component:MyauctionsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyauctionsRoutingModule { }
