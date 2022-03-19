import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';

const routes: Routes = [
  {path:'',component:UserLayoutComponent,children:[
    {path: '',loadChildren:()=>import('./template/user/home/home.module').then(m=>m.HomeModule)},
    {path: 'login',loadChildren:()=>import('./template/user/login/login.module').then(m=>m.LoginModule)},
    {path: 'signup',loadChildren:()=>import('./template/user/signup/signup.module').then(m=>m.SignupModule)},
    {path: 'auction',loadChildren:()=>import('./template/user/auction/auction.module').then(m=>m.AuctionModule)},
    {path: 'reverse-auction',loadChildren:()=>import('./template/user/reverse/reverse.module').then(m=>m.ReverseModule)},
    {path: 'subscription',loadChildren:()=>import('./template/user/subscription/subscription.module').then(m=>m.SubscriptionModule)},
    {path: 'forgot-password',loadChildren:()=>import('./template/forgotpwd/forgotpwd.module').then(m=>m.ForgotpwdModule)}
  ]},
  {path:'admin',component:AdminLayoutComponent,children:[
    {path:'dashboard',loadChildren:()=>import('./template/admin/dashboard/dashboard.module').then(m=>m.DashboardModule)},
    {path:'auction',loadChildren:()=>import('./template/admin/auction/auction.module').then(m=>m.AuctionModule)}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
