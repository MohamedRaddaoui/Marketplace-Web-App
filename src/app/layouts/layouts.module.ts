import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { RouterModule } from '@angular/router';
import { VisitorLayoutComponent } from './visitor-layout/visitor-layout.component';



@NgModule({
  declarations: [
    AdminLayoutComponent,
    UserLayoutComponent,
    VisitorLayoutComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LayoutsModule { }
