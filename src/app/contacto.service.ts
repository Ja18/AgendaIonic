import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

//importamos la clase con el tipo de datos consultados al servidor
import { Contacto } from './contacto';

@Injectable()
export class ContactoService {

    private contactosUrl = 'api/contactos'; // URL to web api
    constructor(private http: Http) { }

    //creamos el metodo getContactos para consultar al servidor la lista de contactos
    getContactos(): Promise<Contacto[]> {
        return this.http.get(this.contactosUrl)
        .toPromise()
        .then(response => response.json() as Contacto[])
        .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
     //   console.error('An error ocurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    private headers = new Headers({'Content-Type': 'application/json'});
 
    borrar(id: number): Promise<void> {
        const url = `${this.contactosUrl}/${id}`;
        return this.http.delete(url, {headers: this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError);   
    }

    crearNuevo(nombre: string, apellido: string, empresa: string, telefono: string, correo: string):
    Promise<Contacto> {
        return this.http
        .post(this.contactosUrl, JSON.stringify({nombre: nombre, apellido: apellido, empresa: empresa
        , telefono: telefono, correo: correo}), {headers: this.headers})
        .toPromise()
        .then(res => res.json().data as Contacto)
        .catch(this.handleError);
    }

    editarNuevo(nombre: string, apellido: string, empresa: string, telefono: string, correo: string):
    Promise<Contacto> {
        return this.http
        .post(this.contactosUrl, JSON.stringify({nombre: nombre, apellido: apellido, empresa: empresa
        , telefono: telefono, correo: correo}), {headers: this.headers})
        .toPromise()
        .then(res => res.json().data as Contacto)
        .catch(this.handleError);
    }
}