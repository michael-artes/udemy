import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/clientes.service';
import { Cliente } from '../cliente';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes-lista',
  templateUrl: './clientes-lista.component.html',
  styleUrls: ['./clientes-lista.component.css']
})
export class ClientesListaComponent implements OnInit {

  clientes: Cliente[] = [];
  clienteSelecionado: Cliente;

  constructor(
    private clienteService: ClientesService,
    private router: Router,
  ){}

  ngOnInit(): void {
    this.listAllClientes();
  }


  private listAllClientes() {

    this.clienteService
      .getClientes()
      .subscribe(res => {
        console.log(res);
        this.clientes = res;
        this.clientes.sort((a, b) => a.id - b.id);
      }, e => {
        console.log(e);
      });
  }

  novoCadastro() {
    this.router.navigate(['/clientes-form']);
  }

  editarCliente(cliente: Cliente){
    this.router.navigate([`/clientes-form/${cliente.id}`], {state: {data: cliente} });
  }

  selecionarCliente(cliente: Cliente) {
    this.clienteSelecionado = cliente;
  }

  deletar(){
    this.clienteService
      .deletar(this.clienteSelecionado)
      .subscribe(res => {
        this.listAllClientes();
      }, e => {
        console.log(e);
      });
  }

}
