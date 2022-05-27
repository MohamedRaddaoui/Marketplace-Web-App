import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReverseRoutingModule } from './reverse-routing.module';
import { ReverseComponent } from './reverse/reverse.component';
import { MaterialModule } from 'src/app/material/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule} from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    ReverseComponent
  ],
  imports: [
    CommonModule,
    ReverseRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule
  ]
})
export class ReverseModule { }
