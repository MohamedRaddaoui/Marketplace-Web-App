import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './guards/adminguard/admin.guard';
import { SubscriberGuard } from './guards/subguard/subscriber.guard';
import { UserGuard } from './guards/user.guard';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';
import { VisitorLayoutComponent } from './layouts/visitor-layout/visitor-layout.component';

const routes: Routes = [
  {path:'',component:UserLayoutComponent,children:[
    {path: '',loadChildren:()=>import('./template/user/home/home.module').then(m=>m.HomeModule)},
    {path: 'auction',loadChildren:()=>import('./template/user/auction/auction.module').then(m=>m.AuctionModule)},
    {path: 'reverse-auction',loadChildren:()=>import('./template/user/reverse/reverse.module').then(m=>m.ReverseModule)},
    {path: 'reverse-auction/:id',loadChildren:()=>import('./template/user/reversepage/reverseauction/reverseauction.module').then(m=>m.ReverseauctionModule)},
    {path: 'auction-room/:auction_id/:product_id',loadChildren:()=>import('./template/user/auctionroom/auctionroom/auctionroom.module').then(m=>m.AuctionroomModule) /*,canActivate : [SubscriberGuard] */},
    {path: 'subscription',loadChildren:()=>import('./template/user/subscription/subscription.module').then(m=>m.SubscriptionModule)},
    {path: 'myprofile',loadChildren:()=>import('./template/user/myprofile/myprofile.module').then(m=>m.MyprofileModule)/*,canActivate : [UserGuard]*/},
    {path: 'purchase-subscription',loadChildren:()=>import('./template/user/purchase-sub/purchase-sub.module').then(m=>m.PurchaseSubModule)/*,canActivate : [UserGuard]*/}
  ]},
  {path:'admin',component:AdminLayoutComponent /*,canActivate : [AdminGuard] */,children:[
    {path:'',redirectTo: 'dashboard',pathMatch: 'full' },
    {path:'dashboard',loadChildren:()=>import('./template/admin/dashboard/dashboard.module').then(m=>m.DashboardModule)},
    {path:'auction',loadChildren:()=>import('./template/admin/allauct/allauct.module').then(m=>m.AllauctModule)} ,
    {path:'allreq',loadChildren:()=>import('./template/admin/allreq/allreq.module').then(m=>m.AllreqModule)},
    {path:'dashboard',loadChildren:()=>import('./template/admin/dashboard/dashboard.module').then(m=>m.DashboardModule)},
      {path:'allsubsc',loadChildren:()=>import('./template/admin/allsubsc/allsubsc.module').then(m=>m.AllsubscModule)},
    {path:'alluser',loadChildren:()=>import('./template/admin/alluser/alluser.module').then(m=>m.AlluserModule)},
    {path:'addsub',loadChildren:()=>import('./template/admin/addsub/addsub.module').then(m=>m.AddsubModule)},

  ]},
  {path: '',component:VisitorLayoutComponent,children:[
    {path: 'login',loadChildren:()=>import('./template/user/login/login.module').then(m=>m.LoginModule)},
    {path: 'signup',loadChildren:()=>import('./template/user/signup/signup.module').then(m=>m.SignupModule)}
  ]},
  {path: 'forgot-password',loadChildren:()=>import('./template/forgotpwd/forgotpwd.module').then(m=>m.ForgotpwdModule)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
