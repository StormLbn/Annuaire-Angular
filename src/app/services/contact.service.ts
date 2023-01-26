// Service = traitement des données

import { Injectable, Input } from "@angular/core";
import { Contact } from "../models/contact.model";

@Injectable ({
    providedIn : 'root'
})
export class ContactService {
  // Syntaxe de déclaration + initialisation d'une liste objets :
    @Input() contacts : Contact[] = [
      {
        id : 1,
        contactName : "Toulemonde Michel",
        birthDate : "28/02/1972",
        address : "123 rue Bidon",
        city : "Fakeville",
        phone : "0123456789",
        contactType : "Client",
        photoUrl : "../assets/image/Photo.png"
      },
      {
        id : 345,
        contactName : "Toulemonde Danielle",
        birthDate : "28/02/1972",
        address : "123 rue Bidon",
        city : "Fakeville",
        phone : "0123456789",
        contactType : "Client",
        photoUrl : "../assets/image/Photo.png"
      },
      {
        id : 97,
        contactName : "Dubois Olivier",
        birthDate : "28/02/1972",
        address : "123 rue Bidon",
        city : "Fakeville",
        phone : "0123456789",
        contactType : "Fournisseur",
        photoUrl : "../assets/image/Photo.png"
      }
    ];

    // Fonction pour récupérer tous les contacts de la liste
    getAllContacts() : Contact[] {
        return this.contacts;
    }

    // Fonction pour récupérer un contact d'après son ID
    getContactById(id : number) : Contact {
      // // Autre algo qui marche :
      // for (let i = 0; i < this.contacts.length; i++) {
      //   if (this.contacts[i].id == id) {
      //     return this.contacts[i];
      //   }
      // }
      // return new Contact;

      // On crée une variable locale
      const contact = this.contacts.find(item => item.id == id);
      // On vérifie que l'objet a bien été trouvé/créé
      if (!contact) {
        // On renvoie une erreur si l'objet n'existe pas
        throw new Error("Pas de contact avec l'id " + id);
      }
      // On renvoie l'objet
      return contact;
    }
}