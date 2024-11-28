import { Component, EventEmitter, Output, Input } from '@angular/core';
import { Personaje } from '../models/personaje';
@Component({
  selector: 'app-personajes-editar',
  templateUrl: './personajes-editar.component.html',
  styleUrl: './personajes-editar.component.css'
})
export class PersonajesEditarComponent {
  @Output() cerrar = new EventEmitter<void>();
  @Input() personajecreado!: Personaje;
  
 
  
  
}
