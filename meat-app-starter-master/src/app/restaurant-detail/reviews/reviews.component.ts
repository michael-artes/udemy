import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import { RestaurantesService } from './../../restaurantes/restaurantes.service';


@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  reviews: Observable<any>;

  constructor(
    private restaurantService: RestaurantesService, 
    private route: ActivatedRoute) 
  {}

  ngOnInit() {
    let idRestaurant = this.route.parent.snapshot.params['id'];
    this.reviews = this.restaurantService.reviewsOfRestaurante(idRestaurant);
  }

}
