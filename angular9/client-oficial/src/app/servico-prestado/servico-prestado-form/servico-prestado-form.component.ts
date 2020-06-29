import { Router } from '@angular/router';
import { ComponetMaster } from 'src/app/validacoes-form/component-master';
import { Component, OnInit } from '@angular/core';
import { ClientesService } from './../../clientes.service';
import { Cliente } from './../../clientes/cliente';
import { ServicoPrestadoService } from './../../servico-prestado.service';
import { ServicoPrestado } from './../servicoPrestado';
import { error } from 'protractor';

@Component({
  selector: 'app-servico-prestado-form',
  templateUrl: './servico-prestado-form.component.html',
  styleUrls: ['./servico-prestado-form.component.css']
})
export class ServicoPrestadoFormComponent extends ComponetMaster implements OnInit {

  clientes: Cliente[] = [];
  servicoPrestado: ServicoPrestado;

  constructor(
    private clienteService: ClientesService,
    private servicoPrestadoService: ServicoPrestadoService,
    private router: Router) {

      super();
      this.servicoPrestado = new ServicoPrestado();
  }

  ngOnInit(): void {

    this.clienteService.getClientes().subscribe(res => this.clientes = res);
  }

  listServicos(){
    this.router.navigate(['/servico-prestado/list']);
  }

  onSubmit() {
    this.servicoPrestadoService
      .salvar(this.servicoPrestado)
      .subscribe(
          res => {
            this.hideErros(),
            this.servicoPrestado =  new ServicoPrestado();
          },
          e => this.showErros(e.error.errors)
      );
  }

}
