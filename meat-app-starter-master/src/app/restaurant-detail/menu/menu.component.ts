import { IMenuItem } from './../menu-item/menu-item.model';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { RestaurantesService } from 'app/restaurantes/restaurantes.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menus: Observable<IMenuItem[]>;

  constructor(
    private restaurantService: RestaurantesService, 
    private route: ActivatedRoute) 
  {}

  ngOnInit() {
    let idRestaurant = this.route.parent.snapshot.params['id'];
    this.menus = this.restaurantService.menuOfRestaurante(idRestaurant);
  }


  addMenuItem(menu: IMenuItem){
    console.log(menu);
  }
}
