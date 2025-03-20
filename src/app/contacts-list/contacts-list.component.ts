import { Component } from '@angular/core';
import { CardContactComponent } from '../card-contact/card-contact.component';

@Component({
  selector: 'app-contacts-list',
  standalone: true,
  imports: [CardContactComponent],
  templateUrl: './contacts-list.component.html',
  styleUrl: './contacts-list.component.css'
})
export class ContactsListComponent {

  //Declaramos un array para almacenar los contactos

  contacts: any[] = [];

  //Función que se ejecuta al renderizar el componente
  ngOnInit(){
    this.getContacts();
  }
  
  //Función para obtener los contactos de la api de jsonplaceholder
  async getContacts(){
    const api = 'https://jsonplaceholder.typicode.com/users';

    const response = await fetch(api);

    if(!response.ok){
      alert('No ha sido posible obtener los contactos');
      return;
    }
    this.contacts = await response.json();
    console.log(this.contacts);
  }

}
