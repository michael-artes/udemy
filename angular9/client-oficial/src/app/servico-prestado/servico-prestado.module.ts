import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ErrorsModule } from './../errors/errors.module';
import { ServicoPrestadoFormComponent } from './servico-prestado-form/servico-prestado-form.component';
import { ServicoPrestadoListComponent } from './servico-prestado-list/servico-prestado-list.component';
import { ServicoPrestadoRoutingModule } from './servico-prestado-routing.module';




@NgModule({
  declarations: [ServicoPrestadoFormComponent, ServicoPrestadoListComponent],
  imports: [
    CommonModule,
    ServicoPrestadoRoutingModule,
    FormsModule,
    ErrorsModule,
  ],
  exports: [ServicoPrestadoFormComponent, ServicoPrestadoListComponent],
})
export class ServicoPrestadoModule { }
