// Imports :
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from '../models/contact.model';

// Caractéristiques du composant :
@Component({
  selector: 'app-card', // nom de la balise du composant
  templateUrl: './card.component.html', // HTML du composant
  styleUrls: ['./card.component.scss']  // style du composant
})

// Classe du composant ; doit implémenter OnInit :
export class CardComponent implements OnInit{

  // Déclaration des variables :
  @Input() contact !: Contact;
  // @Input indique que c'est un type personnalisé

  // Constructeur définissant les services utilisés :
  constructor(private route : Router) {}

  // Fonction d'initialisation = création du composant quand il est appelé :
  ngOnInit(): void {
  }

  // Fonction pour rediriger vers un autre composant :
  goToDetails() : void {
    // On passe l'ID en paramètre du chemin
    this.route.navigateByUrl("contacts/" + this.contact.id);
  }
}
