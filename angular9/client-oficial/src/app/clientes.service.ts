import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from './../environments/environment';
import { Cliente } from './clientes/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor( private http: HttpClient ) {

  }

  salvar(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(`${environment.apiURL}/api/clientes`, cliente);
  }

  atualizar(cliente: Cliente): Observable<any> {
    return this.http.put<any>(`${environment.apiURL}/api/clientes/${cliente.id}`, cliente);
  }

  deletar(cliente: Cliente): Observable<any> {
    return this.http.delete<any>(`http://localhost:8080/api/clientes/${cliente.id}`);
  }

  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${environment.apiURL}/api/clientes`);
  }
}
