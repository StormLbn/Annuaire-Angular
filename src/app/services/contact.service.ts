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
        id : 1,
        contactName : "Toulemonde Danielle",
        birthDate : "28/02/1972",
        address : "123 rue Bidon",
        city : "Fakeville",
        phone : "0123456789",
        contactType : "Client",
        photoUrl : "../assets/image/Photo.png"
      },
      {
        id : 1,
        contactName : "Dubois Olivier",
        birthDate : "28/02/1972",
        address : "123 rue Bidon",
        city : "Fakeville",
        phone : "0123456789",
        contactType : "Fournisseur",
        photoUrl : "../assets/image/Photo.png"
      }
    ];

    getAllContacts() : Contact[] {
        return this.contacts;
    }
}