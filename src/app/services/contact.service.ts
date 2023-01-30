// Service = traitement des données

import { Injectable, Input } from "@angular/core";
import { Contact } from "../models/contact.model";
// Pour utiilser des données stockées dans un fichier JSON :
import jsonContacts from "../../assets/contacts.json";

@Injectable ({
    providedIn : 'root'
})
export class ContactService {
  // Syntaxe de déclaration + initialisation d'une liste objets depuis un JSON :
    @Input() contacts : Contact[] = jsonContacts;

    // Fonction pour récupérer tous les contacts de la liste
    getAllContacts() : Contact[] {
        return this.contacts;
    }

    // Fonction pour récupérer un contact d'après son ID
    getContactById(id : number) : Contact {
      // On crée une variable locale
      const contact = this.contacts.find(item => item.id == id);
      // On vérifie que l'objet a bien été trouvé/créé
      if (!contact) {
        // On renvoie une erreur si l'objet n'existe pas
        throw new Error("Pas de contact avec l'id " + id);
      }
      // On renvoie l'objet
      return contact;
      
      // // Autre algo qui marche :
      // for (let i = 0; i < this.contacts.length; i++) {
      //   if (this.contacts[i].id == id) {
      //     return this.contacts[i];
      //   }
      // }
      // return new Contact;
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