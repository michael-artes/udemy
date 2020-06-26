import { Cliente } from './../cliente';
import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/clientes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent implements OnInit {

  cliente: Cliente;
  sucesso = false;
  errors: string[] = [];

  constructor(
      private clienteService: ClientesService,
      private route: Router,
  ) {
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
        this.sucesso = true;
      }, e => {
        this.sucesso = false;
        this.errors = ['erro ao atualizar o cliente'];
      });
  }

  private salvarCliente() {
    this.clienteService
      .salvar(this.cliente)
      .subscribe(res => {
        this.sucesso = true;
        this.cliente = res;
      }, e => {
        this.sucesso = false;
        this.errors = e.error.errors;
      });
  }

  listagemClientes() {
    this.route.navigate(['/clientes-list']);
  }

}
