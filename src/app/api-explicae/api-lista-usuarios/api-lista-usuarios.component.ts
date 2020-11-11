import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RandomUser } from 'src/app/models';

@Component({
  selector: 'app-api-lista-usuarios',
  templateUrl: './api-lista-usuarios.component.html',
  styleUrls: ['./api-lista-usuarios.component.css'],
})
export class ApiListaUsuariosComponent implements OnInit {
  @Input() user: RandomUser;

  @Output() userChange: EventEmitter<RandomUser> = new EventEmitter();

  randomUser: RandomUser;

  constructor() {}

  ngOnInit() {
    this.randomUser = this.user;
  }

  emitirEvento() {
    this.userChange.emit();
  }
}
