import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonajesCardsComponent } from './personajes-cards/personajes-cards.component';
import { PersonajesTransformacionComponent } from './personajes-transformaciones/personajes-transformaciones.component';
import { FormsModule } from '@angular/forms';
import { PlanetasModule } from '../planetas/planetas.module';
import { PersonajesEditarComponent } from './personajes-editar/personajes-editar.component';



@NgModule({
  declarations: [
    PersonajesCardsComponent,
    PersonajesTransformacionComponent,
    PersonajesEditarComponent
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
