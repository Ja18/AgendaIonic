import { Component } from '@angular/core';

import { EditarcontactoPage } from '../editarcontacto/editarcontacto';
import { NuevocontactoPage } from '../nuevocontacto/nuevocontacto';
import { ContactosPage } from '../contactos/contactos';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = NuevocontactoPage;
  tab3Root = ContactosPage;

  constructor() {

  }
}
