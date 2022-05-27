import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from 'src/app/template/user/navbar/navbar.component'
import { FooterComponent } from 'src/app/template/user/footer/footer/footer.component'

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [

  ]
})
export class NavfootModule {
}
