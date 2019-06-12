import { Component, OnInit } from '@angular/core';

import { Restaurante } from './restaurante';
import { RestaurantesService } from './restaurantes.service';

@Component({
  selector: 'mt-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css']
})
export class RestaurantesComponent implements OnInit {

  restaurantes: Restaurante[];

  constructor(private restService: RestaurantesService) { }

  ngOnInit() {
    this.restService.getRestaurantes().subscribe(res => this.restaurantes = res);
  }

}
