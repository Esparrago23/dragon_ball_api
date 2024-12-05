import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanetasComponent } from './planetas/planetas.component';



@NgModule({
  declarations: [
    PlanetasComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PlanetasComponent
  ]
})
export class PlanetasModule { }
