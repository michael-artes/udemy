import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from './../environments/environment';
import { User } from './login/user';

import { JwtHelperService } from "@auth0/angular-jwt";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  helper = new JwtHelperService();

  constructor(private http: HttpClient) { }

  getToken(): string {
    const tokenString = localStorage.getItem('access_token');

    if (tokenString) {
      const token = JSON.parse(tokenString);
      return token.access_token;
    }

    return null;
  }

  isAutenticated(): boolean {

    const token = this.getToken();

    return token && !this.helper.isTokenExpired(token);
  }

  logout() {
    localStorage.removeItem('access_token');
  }

  getLogedUser(): string {
    const token = this.getToken();

    return this.helper.decodeToken(token).user_name;
  }


  salvar(usuario: User): Observable<any> {
    return this.http.post<any>(`${environment.apiURL}/api/usuarios`, usuario);
  }

  realizarLogin(login: string, password: string): Observable<any> {

    const paramns = new HttpParams()
                        .set('username', login)
                        .set('password', password)
                        .set('grant_type', 'password');

    const headers = {
      'Authorization': 'Basic ' + btoa(`${environment.clientID}:${environment.clienteSecred}`)
    }

    return this.http.post<any>(`${environment.apiURL}${environment.obterTokenUrl}`, paramns, { headers });
  }

}
