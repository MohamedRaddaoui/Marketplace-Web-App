import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditprofileRoutingModule } from './editprofile-routing.module';
import { ProfileComponent } from './profile/profile.component';
@NgModule({
  declarations: [
    ProfileComponent,

  ],
  imports: [
    CommonModule,
    EditprofileRoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ]
})
export class EditprofileModule { }
