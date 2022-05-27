import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyprofileComponent } from './myprofile/myprofile.component';

const routes: Routes = [
  {path: '', component:MyprofileComponent/*,canActivate : [UserGuard]*/,
  children : [
    {path:'',redirectTo: 'edit',pathMatch: 'full' },
    {path: 'edit',loadChildren:()=>import('../editprofile/editprofile.module').then(m=>m.EditprofileModule)},
    {path: 'password-setting',loadChildren:()=>import('../pwdsettings/pwdsettings.module').then(m=>m.PwdsettingsModule)},
    {path: 'my-auctions',loadChildren:()=>import('../myauctions/myauctions/myauctions.module').then(m=>m.MyauctionsModule)},
    {path: 'my-wishlist',loadChildren:()=>import('../mywishlist/mywishlist/mywishlist.module').then(m=>m.MywishlistModule)},
    {path: 'my-pocket',loadChildren:()=>import('../mypocket/mypocket/mypocket.module').then(m=>m.MypocketModule)},
    {path: 'my-products',loadChildren:()=>import('../myproducts/myproducts/myproducts.module').then(m=>m.MyproductsModule)}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyprofileRoutingModule { }
