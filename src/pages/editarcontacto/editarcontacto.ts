import { Component } from '@angular/core';
import { NavController, ToastController, AlertController  } from 'ionic-angular';
import { ContactoService } from '../../app/contacto.service';
import { Contacto } from '../../app/contacto';

@Component({
  selector: 'page-editarcontacto',
  templateUrl: 'editarcontacto.html'
})

export class EditarcontactoPage {
  contactos: Contacto[];
  contacto: Contacto;
  nuevoForm = {};

  id: number;  
  constructor(public navCtrl: NavController, private contactoService: ContactoService, public toastCtrl: ToastController, public alertCtrl: AlertController) {
    
  }
  
  getContactos(): void {
    //this.bandas = this.bandaService.getBandas();
    this.contactoService.getContactos().then(contactos => this.contactos = this.contactos);
  }

  ngOnInit(): void {
    this.getContactos();
  }

  editar(editarForm): void {
    if (!editarForm.nombre) { return; }
    this.contactoService.editarNuevo(editarForm.nombre, editarForm.apellido, editarForm.empresa,
      editarForm.telefono, editarForm.correo)
      .then(contacto => {

        this.contactos.push(contacto);
        this.contacto = null;
        editarForm.nombre = null;
        editarForm.apellido = null;
        editarForm.empresa = null;
        editarForm.telefono = null;
        editarForm.correo = null;

        let toast = this.toastCtrl.create({
          message: 'Contacto registrado',
          duration: 3000
        });
        toast.present();
      });
  }

  onGuardar(contacto: Contacto):void {
    let confirm = this.alertCtrl.create({
      title: 'Guardar',
      message: 'Esta seguro que desea Guardar este contato?',
      buttons: [
        {
        text: 'Si',

        handler: () => {
          //console.log('Agree clicked');
        },       
      },
      {
        text: 'No',
        handler: () => {
          this.contactoService
            .borrar(contacto.id)
            .then(() => {
              this.contactos = this.contactos.filter(h => h !== contacto);
              if (this.contacto === contacto) { this.contacto = null; }
            });
        }
      }
      ]
    });
    confirm.present();
  }
}
