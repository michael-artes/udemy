import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesFormComponent } from './clientes-form/clientes-form.component';
import { ClientesListaComponent } from './clientes-lista/clientes-lista.component';


const routes: Routes = [
  { path: 'form', component: ClientesFormComponent },
  { path: 'form/:id', component: ClientesFormComponent },
  { path: 'list', component: ClientesListaComponent },
  { path: '', redirectTo: '/clientes/list', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
