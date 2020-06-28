import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-errors',
  templateUrl: './errors.component.html',
  styleUrls: ['./errors.component.css']
})
export class ErrorsComponent implements OnInit {


  @Input() sucesso = false;
  @Input() msgSucesso: string;
  @Input() err: string;

  constructor() { }

  ngOnInit(): void {
  }

}