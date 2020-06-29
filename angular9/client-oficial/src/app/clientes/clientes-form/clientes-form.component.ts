import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientesService } from 'src/app/clientes.service';
import { ComponetMaster } from 'src/app/validacoes-form/component-master';
import { Cliente } from './../cliente';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent extends ComponetMaster implements OnInit {

  cliente: Cliente;

  constructor(
      private clienteService: ClientesService,
      private route: Router,
  ) {
    super();
    this.cliente = new Cliente();
  }

  ngOnInit(): void {

    if (history.state && history.state.data) {
      this.cliente = history.state.data;
    }
  }

  onSubmit() {
    this.cliente.id ? this.atualizarCliente() : this.salvarCliente();
  }

  private atualizarCliente() {

    this.clienteService
      .atualizar(this.cliente)
      .subscribe(res => {
        this.hideErros();
      }, e => {
        this.showErros(['erro ao atualizar o cliente']);
      });
  }

  private salvarCliente() {
    this.clienteService
      .salvar(this.cliente)
      .subscribe(res => {
        this.hideErros();
        this.cliente = res;
      }, e => {
        this.showErros(e.error.errors);
      });
  }

  listagemClientes() {
    this.route.navigate(['/clientes']);
  }

}
