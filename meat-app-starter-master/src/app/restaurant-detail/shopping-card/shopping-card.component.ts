import { Component, OnInit } from '@angular/core';
import { IMenuItem } from './../menu-item/menu-item.model';
import { CardItemModel } from './card-item-model';
import { ShoppingCardService } from './shopping-card.service';

@Component({
  selector: 'mt-shopping-card',
  templateUrl: './shopping-card.component.html',
  styleUrls: ['./shopping-card.component.css']
})
export class ShoppingCardComponent implements OnInit {

  constructor(private shoppingCardService: ShoppingCardService) { }

  ngOnInit() {
  }

  clear() {
    this.shoppingCardService.clear();
  }

  items(): CardItemModel[]{
    return this.shoppingCardService.items;
  }

  removeItem(item: CardItemModel){
    this.shoppingCardService.removeItem(item);
  }

  addItem(item: IMenuItem){
    this.shoppingCardService.addItem(item);
  }

  total(): number{
    return this.shoppingCardService.total();
  }

}
