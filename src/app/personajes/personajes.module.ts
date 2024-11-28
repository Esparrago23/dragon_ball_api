import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonajesCardsComponent } from './personajes-cards/personajes-cards.component';
import { PersonajesTransformacionComponent } from './personajes-transformaciones/personajes-transformaciones.component';
import { PersonajesPlanetaComponent } from './personajes-planeta/personajes-planeta.component';
import { FormsModule } from '@angular/forms';
import { PersonajesEditarComponent } from './personajes-editar/personajes-editar.component';



@NgModule({
  declarations: [
    PersonajesCardsComponent,
    PersonajesTransformacionComponent,
    PersonajesPlanetaComponent,
    PersonajesEditarComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    PersonajesCardsComponent,
    PersonajesTransformacionComponent,
    PersonajesPlanetaComponent
  ]
})
export class PersonajesModule { }
