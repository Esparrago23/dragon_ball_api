import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonajesCardsComponent } from './personajes-cards/personajes-cards.component';
import { PersonajesTransformacionesComponent } from './personajes-transformaciones/personajes-transformaciones.component';
import { PersonajesPlanetaComponent } from './personajes-planeta/personajes-planeta.component';



@NgModule({
  declarations: [
    PersonajesCardsComponent,
    PersonajesTransformacionesComponent,
    PersonajesPlanetaComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PersonajesModule { }
