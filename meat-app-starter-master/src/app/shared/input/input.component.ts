import { Component, OnInit, Input, ContentChild, AfterContentInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'mt-input-container',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit, AfterContentInit {
  
  @Input() label: string;
  @Input() errorMessage: string;
  
  input: NgModel;
  
  @ContentChild(NgModel) ngModel: NgModel;
  
  constructor() { }
  
  ngOnInit() {
  }
  
  ngAfterContentInit(): void {
    this.input = this.ngModel;

    if (this.input === undefined) {
      throw new Error("O input nao pode ser undefined");
    }
  }



  hasSuccess(): boolean {
    return this.input.valid && (this.input.dirty || this.input.touched);
  }

  hasError(): boolean {
    return this.input.invalid && (this.input.dirty || this.input.touched);
  }




}
