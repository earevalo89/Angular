import { Component, OnInit } from '@angular/core';
import { Lista, ListaItem } from '../../app/clases/index';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent implements OnInit {

  nombreLista: string;
  nombreItem: string;

  items:ListaItem[] = [];

  constructor() { }

  ngOnInit(): void { }

  agregar() {

    if( this.nombreItem.length == 0 ) {
      return;
    }

    let item = new ListaItem();
    item.nombre = this.nombreItem;

    this.items.push( item );
    this.nombreItem = '';

    console.log(this.items);
  }
}
