import { ServicoPrestadoListComponent } from './servico-prestado/servico-prestado-list/servico-prestado-list.component';
import { ClientesListaComponent } from './clientes/clientes-lista/clientes-lista.component';
import { LayoutComponent } from './layout/layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'cadastro-usuario', component: CadastroUsuarioComponent },
  {
    path: '', component: LayoutComponent, canActivate: [AuthGuard], children: [
      { path: 'home', component: HomeComponent },
      {
        path: 'clientes',
        loadChildren: () => import('./clientes/clientes.module').then(m => m.ClientesModule)
      },
      {
        path: 'servico-prestado',
        loadChildren: () => import('./servico-prestado/servico-prestado.module').then(m => m.ServicoPrestadoModule)
      },
      { path: '', redirectTo: '/home', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
