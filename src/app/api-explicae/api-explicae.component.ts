import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RandomUser } from '../models/random-user';
import { RandomUserService } from '../services';

@Component({
  selector: 'app-api-explicae',
  templateUrl: './api-explicae.component.html',
  styleUrls: ['./api-explicae.component.css'],
})
export class ApiExplicaeComponent implements OnInit {
  constructor(
    private randomUserService: RandomUserService
  ) {}

  randomUsers: RandomUser[];
  randomUser: RandomUser = null;
  mostrarDetalhes: boolean = false;

  ngOnInit() {
    console.log(this.randomUser);
    this.obterUsuarios();
    this.randomUser = null;
  }

  onDetalhes(randomUser: RandomUser) {
    this.randomUser = randomUser;
    this.mostrarDetalhes = true;
  }

  gerarOutroUsuario() {
    this.obterUsuarios();
    this.randomUser = this.randomUsers[0];
  }

  obterUsuarios() {
    this.randomUserService
      .getAll()
      .subscribe((users) => (this.randomUsers = users));
  }
}
