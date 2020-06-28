import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ErrorsComponent } from './errors.component';



@NgModule({
  declarations: [ErrorsComponent],
  imports: [
    CommonModule
  ],
  exports: [ErrorsComponent]
})
export class ErrorsModule { }
