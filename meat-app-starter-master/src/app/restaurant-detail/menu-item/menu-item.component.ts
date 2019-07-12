import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { IMenuItem } from './menu-item.model';


@Component({
  selector: 'mt-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

  @Input() menu: IMenuItem;
  @Output() add = new EventEmitter<IMenuItem>();

  constructor() { }

  ngOnInit() {
  }

  emittAddEvent() {
    this.add.emit(this.menu);
  }

}
