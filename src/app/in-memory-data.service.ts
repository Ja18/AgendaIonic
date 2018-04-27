import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
    createDb() {

        const contactos = [
            {id:1, nombre: 'Juan', apellido: 'Perez', empresa: 'alcaldia', telefono:'301755555', correo:'juanperez@correo.com' },
            {id:2, nombre: 'Adriana', apellido: 'Lopez', empresa: 'unimayor', telefono:'301755556', correo:'adroiana@correo.com' },
            {id:3, nombre: 'Ernesto', apellido: 'Verdugo', empresa: 'eteknik', telefono:'301755557', correo:'ernesto@correo.com' },
            {id:4, nombre: 'Angela', apellido: 'Vivas', empresa: 'alcaldia', telefono:'301755558', correo:'angela@correo.com' },
            {id:5, nombre: 'Maria', apellido: 'Valencia', empresa: 'alcaldia', telefono:'301755559', correo:'maria@correo.com' }
        ];
        return {contactos};
    }
}