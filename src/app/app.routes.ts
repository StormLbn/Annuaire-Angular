import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CardsListComponent } from "./cards-list/cards-list.component";

const routes : Routes = [
    {path : 'contacts', component : CardsListComponent},
    // {path : 'contacts/:id', component : ContactComponent}
]

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