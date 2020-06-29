import { User } from './user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User;

  constructor() {
    this.user = new User();
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.user);
  }

}
