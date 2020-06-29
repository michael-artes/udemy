import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { User } from './user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User;

  constructor(private router: Router, private authService: AuthService) {

  }

  ngOnInit(): void {
    this.user = new User();
  }

  onSubmit() {
    this.authService
      .realizarLogin(this.user.login, this.user.password)
      .subscribe(
        res => {
          localStorage.setItem('access_token', JSON.stringify(res));
          this.router.navigate(['/home']);
        },
        err => console.log(err));
  }

}
