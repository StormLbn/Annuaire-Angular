import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contact } from '../models/contact.model';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  // Déclaration des variables qui seront utilisées dans le composant
  @Input() contact !: Contact;
  id !: number;

  // Déclaration des services utilisés par le composant
  constructor(private route : ActivatedRoute, private service : ContactService) {}

  ngOnInit(): void {
    // On récupère le paramètre passé dans l'URL de ce composant (cf. syntaxe du path) et on le stocke dans une variable
    this.id = this.route.snapshot.params["id"];

    // On récupère les données du contact via le service, en utilisant l'ID récupéré dans l'URL
    this.contact = this.service.getContactById(this.id);

    this.setAge()
  }


  // BONUS : fonction pour calculer l'âge et l'ajouter aux paramètres du Contact
  setAge() : void {
    const today = new Date(Date.now());
    if (this.contact.birthDate) {
      const birthDate = new Date(this.contact.birthDate);
      const age = today.getFullYear() - birthDate.getFullYear();
      this.contact.age = age;
    }
  }
}

