import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonajesCardsComponent } from './personajes/personajes-cards/personajes-cards.component';
import { PersonajesTransformacionComponent } from './personajes/personajes-transformaciones/personajes-transformaciones.component';
const routes: Routes = [
  {path: '', redirectTo:'/Personajes', pathMatch:'full'},
  {path: 'Personajes', component:PersonajesCardsComponent},
  {path: 'transformaciones/:id', component:PersonajesTransformacionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
