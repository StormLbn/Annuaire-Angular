import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { HeadNavComponent } from './head-nav/head-nav.component';
import { CardsListComponent } from './cards-list/cards-list.component';
import { Route } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HeadNavComponent,
    CardsListComponent
  ],
  imports: [
    BrowserModule,
    Route
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
