import { IradioOption } from './../shared/radio/iradio-option';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  paymentOptions: IradioOption[] = [
    { label: 'Dinheiro', value: 'DIN', default: true},
    { label: 'Cartão de Crédito', value: 'CRED'},
    { label: 'Cartão de Débito', value: 'DEB'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
