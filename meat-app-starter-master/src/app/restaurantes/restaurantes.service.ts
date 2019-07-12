import { IMenuItem } from './../restaurant-detail/menu-item/menu-item.model';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { MEAT_API } from './../app.api';

import { Restaurante } from './restaurante';
import { ErrorHandler } from 'app/app.error-handler';


@Injectable()
export class RestaurantesService {

  restaurantes: Restaurante[];

  constructor(private http: Http) {}

  getRestaurantes(): Observable<Restaurante[]> {
    return this.http.get(`${MEAT_API}/restaurants`)
      .map(response => response.json())
      .catch(ErrorHandler.handlerError);
  }


  getRestauranteById(id: string): Observable<Restaurante>{
    return this.http.get(`${MEAT_API}/restaurants/${id}`)
      .map(response => response.json())
      .catch(ErrorHandler.handlerError);
  }

  reviewsOfRestaurante(id: string): Observable<any> {
    return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
      .map(response => response.json())
      .catch(ErrorHandler.handlerError);
  }

  menuOfRestaurante(id: string): Observable<IMenuItem[]> {
    return this.http.get(`${MEAT_API}/restaurants/${id}/menu`)
      .map(response => response.json())
      .catch(ErrorHandler.handlerError);
  }  

}
