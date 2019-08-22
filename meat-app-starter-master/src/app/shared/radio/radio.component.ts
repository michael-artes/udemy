import { Component, OnInit, Input } from '@angular/core';
import { IradioOption } from './iradio-option';

@Component({
  selector: 'mt-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css']
})
export class RadioComponent implements OnInit {

  @Input() options: IradioOption[];

  value: string;

  constructor() { }

  ngOnInit() {
  }

  setValue(val: string) {
    this.value = val;
  }

}
