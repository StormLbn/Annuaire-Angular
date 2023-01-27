// Composant pour formulaire de nouveau contact

import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Contact } from '../models/contact.model';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent implements OnInit {

  // Déclaration de la variable pour le formulaire
  form !: FormGroup;

  // Déclaration de la variable pour le Contact
  @Input() contact !: Contact;

  // Injection du service FormBuilder :
  constructor(private fb : FormBuilder, private service : ContactService) {}

ngOnInit(): void {
  // // Création d'un formulaire manuellement :
  // // Utilisation du constructeur de FormGroup pour initialiser un groupe de champs
  // group = new FormGroup({
  //     // Utilisation du constructeur de FormControl pour initialiser un champ
  //     test : new FormControl(''),
  //     otherTest : new FormControl('Texte de départ'),
  //     nestedGroup : new FormGroup({
  //         street : new FormControl(''),
  //         city : new FormControl(''),
  //         postcode : new FormControl('')
  //       })
  //     });
      
      // Création d'un formulaire en utilisant FormBuilder :
      this.form = this.fb.group({
        contactType : ['', Validators.required],
        contactName : ['', Validators.required],
        photoUrl : ['../assets/image/Photo.png', Validators.required],
        phone : ['', Validators.pattern('/0[1-9][0-9]{8}/g')],
        email : ['', Validators.email],
        website : [''],
        address : this.fb.group({
          street : [''],
          city : [''],
          postcode : [''],
        }),
        birthDate : [''],
        firstname : [''],
      })
    }

  onSubmit(): void {
    const datas = this.form.value;
    const address = "";

    if (datas["street"] && datas["city"] && datas["postcode"]) {
      const address = datas["street"] + ", " + datas["postcode"] + " " + datas["city"];
    }

    this.contact = {
      contactType : datas["contactType"],
      contactName : datas["contactName"],
      photoUrl : datas["photoUrl"],
      phone : datas["phone"],
      email : datas["email"],
      website : datas["website"],
      address : address,
      firstName : datas["firstName"],
      birthDate : datas["birthDate"],
    }
    this.service.saveNewContact(this.contact);
  }

}

