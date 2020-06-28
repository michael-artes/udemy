import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from './../environments/environment';
import { ServicoPrestado } from './servico-prestado/servicoPrestado';

@Injectable({
  providedIn: 'root'
})
export class ServicoPrestadoService {

  constructor( private http: HttpClient ) { }


  salvar(servicoPrestado: ServicoPrestado): Observable<ServicoPrestado> {
    return this.http.post<ServicoPrestado>( `${environment.apiURL}/api/servicos-prestados`, servicoPrestado);
  }

  pesquisar(nomeCliente: string, mes: number): Observable<ServicoPrestado[]> {
    return this.http.get<ServicoPrestado[]>( `${environment.apiURL}/api/servicos-prestados/pesquisar?nome=${nomeCliente ? nomeCliente : ''}&mes=${mes}`);
  }
}
