import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-megasena-explicae',
  templateUrl: './megasena-explicae.component.html',
  styleUrls: ['./megasena-explicae.component.css'],
})
export class MegasenaExplicaeComponent implements OnInit {
  
  listaNumerosSorteadosTabela1: number[] = [];
  listaNumerosSorteadosTabela2: number[] = [];
  listaNumerosSorteadosTabela3: number[] = [];
  
  constructor() {}

  arraySessenta(n: number) {
    return Array(n);
  }

  refresh(): void {
    window.location.reload();
  }

  sortearNumero(): number[] {
    let num: number;
    let listaNumeros: number[] = [];
    while (listaNumeros.length < 6) {
      num = Math.floor(Math.random() * 60) + 1;
      if (listaNumeros.indexOf(num) === -1){
        listaNumeros.push(num);
      }
    }
    listaNumeros.sort((a,b) => a - b);
    return listaNumeros;
  }

  validarListas(lista1?: number[], lista2?: number[]): number[]{
    let listaNumeros: number[] = this.sortearNumero();
    if (lista1 && lista2) {
      while (JSON.stringify(listaNumeros) === JSON.stringify(lista1) || JSON.stringify(listaNumeros) === JSON.stringify(lista2)) {
        listaNumeros = this.sortearNumero();
      }
    } else if (lista1 || lista2) {
      if (lista1){
        while (JSON.stringify(listaNumeros) === JSON.stringify(lista1)) {
          listaNumeros = this.sortearNumero();
        }
      } else {
        while (JSON.stringify(listaNumeros) === JSON.stringify(lista2)) {
          listaNumeros = this.sortearNumero();
        }
      }
    }
    return listaNumeros;
  }

  ngOnInit(): void {
    this.listaNumerosSorteadosTabela1 = this.sortearNumero();
    this.listaNumerosSorteadosTabela2 = this.validarListas(this.listaNumerosSorteadosTabela1);
    this.listaNumerosSorteadosTabela3 = this.validarListas(this.listaNumerosSorteadosTabela1, this.listaNumerosSorteadosTabela2);
  }
}
