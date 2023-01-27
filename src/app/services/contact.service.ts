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
        id : 165,
        contactName : "Toulemonde",
        firstName : "Michel",
        phone : "0123456789",
        email : "toulemondemichel@mail.com",
        address : "123 rue Bidon, 99000 Fakeville",
        contactType : "client",
        photoUrl : "../assets/image/Photo.png",
        birthDate : "1971-10-11"
      },
      {
        id : 97,
        contactName : "Société Dubois",
        phone : "0123456789",
        email : "dubois@societe.com",
        address : "123 rue Bidon, 99000 Fakeville",
        contactType : "fournisseur",
        photoUrl : "../assets/image/Photo.png",
        website : "http://www.bois-de-chauffage.net"
      },
      {
        id : 666,
        contactName : "Sémoa",
        firstName : "Storm",
        phone : "0666666666",
        email : "siderealstorm@mail.com",
        address : "66 rue Jean Jaurès, 59286 Roost-Warendin",
        contactType : "client",
        photoUrl : "../assets/image/Photo.png",
        birthDate : "1994-03-26"
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

    // Fonction pour ajouter un contact à la liste
    saveNewContact(contact : Contact) : void {
      contact.id = this.contacts.length + 1;
      this.contacts.push(contact);
    }

    // // TODO Fonction pour générer un ID aléatoire
    // generateId() : number {
    //   const newId = 0;
    //   do {

    //   }
    //   while ()
    //   return newId;
    // }
}