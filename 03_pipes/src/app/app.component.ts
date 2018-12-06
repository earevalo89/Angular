import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'Alexánder';
  nombre2 = 'edwiN alexÁnder arÉvalo orteGa';

  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  PI = Math.PI;

  a = 0.234;

  salario = 1234.5;

  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: {
      calle: 'Avenida siempre viva',
      casa: '742'
    }
  };

  valorPromesa = new Promise( ( resolve, reject ) => {
    setTimeout( () => resolve('Llego la data'), 3500);
  });

  // fecha = '2018-11-26';
  fecha = new Date();

  video = 'YFQZkPKfXVg';

  clave = 'Password1234';
}
