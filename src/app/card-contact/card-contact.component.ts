import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-contact',
  standalone: true,
  imports: [],
  templateUrl: './card-contact.component.html',
  styleUrl: './card-contact.component.css'
})
export class CardContactComponent {
  @Input() contact: any; //Variable para obtener los datos desde Contact-list
}
