import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CardsListComponent } from "./cards-list/cards-list.component";
import { DetailsComponent } from "./details/details.component";

// Déclaration et initialisation des routes dans une constante
const routes : Routes = [
	// Syntaxe : chemin puis nom du composant (classe)
    {path : 'contacts', component : CardsListComponent},
	{path : '', redirectTo : '/contacts', pathMatch : 'full'},
    {path : 'contacts/:id', component : DetailsComponent}
	// la syntaxe ':paramètre' permet d'envoyer un paramètre dans l'URL
]

// Utilisation de la constante dans NgModule
@NgModule({
	imports : [
		RouterModule.forRoot(routes)
	],
	exports : [
		RouterModule
	]
})
export class Route {
}