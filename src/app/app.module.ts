import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { HeadNavComponent } from './head-nav/head-nav.component';
import { CardsListComponent } from './cards-list/cards-list.component';
import { Route } from './app.routes';
import { DetailsComponent } from './details/details.component';
import { FooterComponent } from './footer/footer.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HeadNavComponent,
    CardsListComponent,
    DetailsComponent,
    FooterComponent,
    AddContactComponent
  ],
  imports: [
    BrowserModule,
    Route,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
