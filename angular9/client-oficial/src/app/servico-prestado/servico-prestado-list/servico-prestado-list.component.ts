import { ServicoPrestado } from './../servicoPrestado';
import { ServicoPrestadoService } from './../../servico-prestado.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servico-prestado-list',
  templateUrl: './servico-prestado-list.component.html',
  styleUrls: ['./servico-prestado-list.component.css']
})
export class ServicoPrestadoListComponent implements OnInit {

  nome: string;
  mes: number;

  meses: Array<number> = [1,2,3,4,5,6,7,8,9,10,11,12];

  servicos: ServicoPrestado[] = [];

  constructor(
    private router: Router, 
    private servicoPrestadoService: ServicoPrestadoService) {}

  ngOnInit(): void {}

  novoServico() {
    this.router.navigate(['/servico-prestado-form']);
  }

  onSubmit() {
    this.servicoPrestadoService
      .pesquisar(this.nome, this.mes)
      .subscribe(
        res => {
          this.servicos = res;
          console.log(res);
        },
        e => console.log(e));
  }

}
