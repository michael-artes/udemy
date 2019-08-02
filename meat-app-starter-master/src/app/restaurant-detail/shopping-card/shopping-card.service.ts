import { CardItemModel } from './card-item-model';
import { Injectable } from '@angular/core';
import { IMenuItem } from '../menu-item/menu-item.model';

@Injectable()
export class ShoppingCardService {

  items: CardItemModel[] = [];

  clear() {
    this.items = [];
  }

  addItem(item: IMenuItem){

    let foundItem = this.items.find((i) => i.menuItem.id === item.id);

    if (foundItem) {
      foundItem.quantity = foundItem.quantity + 1;
    } else {
      this.items.push(new CardItemModel(item));
    }

  }

  removeItem(item: CardItemModel){
    this.items.splice(this.items.indexOf(item), 1);
  }

  total(): number {
    return this.items
      .map(item => item.value())
      .reduce((prev, value) => prev + value, 0);
  }

}
