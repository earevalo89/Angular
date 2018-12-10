import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

// ListaDeseosService
import { ListaDeseosService } from '../../app/services/lista-deseos.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

}
