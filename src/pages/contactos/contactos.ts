import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
//importar servicio de datos de contactos
import { ContactoService } from '../../app/contacto.service';
import { Contacto } from '../../app/contacto';

@Component({
  selector: 'page-contactos',
  templateUrl: 'contactos.html',
  providers: [ContactoService]
})
export class ContactosPage {

  contactos: Contacto[];
  contacto: Contacto;

  constructor(public navCtrl: NavController,public alertCtrl: AlertController, private contactoService: ContactoService) {

  }
  //al entrar en la vista ejecutamos el metodo getContactos
  ionViewDidEnter (){
    this.getContactos();
  }
  //retorna la lista de contactos desde el servicio de datos
  getContactos(): void {
    this.contactoService.getContactos().then(contactos => this.contactos = contactos);
  }

  //metodo para eliminar contacto
  borrar(contacto: Contacto):void {
    let confirm = this.alertCtrl.create({
      title: 'Borrar?',
      message: 'Esta seguro que desea borrar este contato?',
      buttons: [
        {
        text: 'Si',
        handler: () => {
          this.contactoService
            .borrar(contacto.id)
            .then(() => {
              this.contactos = this.contactos.filter(h => h !== contacto);
              if (this.contacto === contacto) { this.contacto = null; }
            });
        }
      },
      {
        text: 'No',
        handler: () => {
          //console.log('Agree clicked');
        }
      }
      ]
    });
    confirm.present();
  }
}