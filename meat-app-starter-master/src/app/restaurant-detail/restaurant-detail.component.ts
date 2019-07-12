import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import { RestaurantesService } from './../restaurantes/restaurantes.service';
import { Restaurante } from 'app/restaurantes/restaurante';


@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit {

  restaurant: Restaurante;

  constructor(
    private restaurantService: RestaurantesService, 
    private route: ActivatedRoute) 
  { }

  ngOnInit() {

    let idRestaurantDetail = this.route.snapshot.params['id'];

    this.restaurantService.getRestauranteById(idRestaurantDetail)
      .subscribe(res => this.restaurant = res);

  }

}
