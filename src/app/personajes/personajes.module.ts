import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonajesCardsComponent } from './personajes-cards/personajes-cards.component';
import { PersonajesTransformacionComponent } from './personajes-transformaciones/personajes-transformaciones.component';
import { FormsModule } from '@angular/forms';
import { PlanetasModule } from '../planetas/planetas.module';



@NgModule({
  declarations: [
    PersonajesCardsComponent,
    PersonajesTransformacionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PlanetasModule
],
  exports:[
    PersonajesCardsComponent,
    PersonajesTransformacionComponent
  ]
})
export class PersonajesModule { }
