import { Injectable } from '@angular/core';
import { Restaurante } from './restaurante';

@Injectable()
export class RestaurantesService {

  restaurantes: Restaurante[] = [{
    id: "bread-bakery",
    nome: "Bread & Bakery",
    categoria: "Bakery",
    tempoDeEspera: "25m",
    rating: 4.9,
    imagePath: "assets/img/restaurants/breadbakery.png",
    about: "A Bread & Brakery tem 40 anos de mercado. Fazemos os melhores doces e pães. Compre e confira.",
    hours: "Funciona de segunda à sexta, de 8h às 23h",
  },
  {
    id: "burger-house",
    nome: "Burger House",
    categoria: "Hamburgers",
    tempoDeEspera: "100m",
    rating: 3.5,
    imagePath: "assets/img/restaurants/burgerhouse.png",
    about: "40 anos se especializando em trash food.",
    hours: "Funciona todos os dias, de 10h às 22h"
  },
  {
    id: "coffee-corner",
    nome: "Coffee Corner",
    categoria: "Coffee Shop",
    tempoDeEspera: "30-40m",
    rating: 4.8,
    imagePath: "assets/img/restaurants/coffeecorner.png",
    about: "A Coffe Corner foi eleita a melhor cafeteria da cidade.",
    hours: "Funciona de segunda à sábado, de 6h às 22h"
  }
];

  constructor() { }



  getRestaurantes(): Restaurante[] {
    return this.restaurantes;    
  }


}
