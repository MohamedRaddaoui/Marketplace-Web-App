import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PwdsettingsComponent } from './pwdsettings/pwdsettings.component';

const routes: Routes = [
  {path: '', component:PwdsettingsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PwdsettingsRoutingModule { }
