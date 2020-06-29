import { AuthService } from './../auth.service';
import { Router } from '@angular/router';
import { User } from './../login/user';
import { Component, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit {

  user: User;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.user = new User();
  }

  criarUsuario(){
    this.authService
      .salvar(this.user)
      .subscribe(res => {
        this.router.navigate(['/login']);
      }, err => {
        console.log(err);
      });
  }

}
