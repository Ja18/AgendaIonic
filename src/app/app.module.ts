import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

//cargar http
import { HttpModule } from '@angular/http';
// Imports para cargar y configurar in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
//cargar ContactoService
import { ContactoService } from './contacto.service';

import { EditarcontactoPage } from '../pages/editarcontacto/editarcontacto';
import { NuevocontactoPage } from '../pages/nuevocontacto/nuevocontacto';
import { ContactosPage } from '../pages/contactos/contactos';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    EditarcontactoPage,
    NuevocontactoPage,
    ContactosPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService) //in-memory web API
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    EditarcontactoPage,
    NuevocontactoPage,
    ContactosPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ContactoService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
