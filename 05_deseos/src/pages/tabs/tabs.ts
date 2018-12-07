import { Component } from '@angular/core';

// import { AboutPage } from '../about/about';
// import { ContactPage } from '../contact/contact';
// import { HomePage } from '../home/home';
import { PendientesComponent } from '../pendientes/pendientes.component';
import { TerminadosComponent } from '../terminados/terminados.component';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  /*
  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  */

   tab1Root = PendientesComponent;
   tab2Root = TerminadosComponent;
   // tab3Root = HomePage;

  constructor() {

  }
}
