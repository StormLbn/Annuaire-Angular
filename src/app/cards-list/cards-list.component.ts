import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from '../models/contact.model';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.scss']
})
export class CardsListComponent {

  // On déclare les variables de la classe
  @Input() contactsList !: Contact[];

  // On appelle les services qu'on va utiliser dans le constrcteur
  constructor(private contactService : ContactService, private route : Router){}

  // On initialise le composant
  ngOnInit(): void {
    // On appelle la fonction du service pour résupérer les données
    this.contactsList = this.contactService.getAllContacts();
    this.route.navigateByUrl("contacts");
  }
}
