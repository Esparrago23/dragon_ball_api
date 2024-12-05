import { Component, EventEmitter, Output, Input } from '@angular/core';
import { Personaje } from '../models/personaje';
import { Transformacion } from '../models/transformations';
@Component({
  selector: 'app-personajes-editar',
  templateUrl: './personajes-editar.component.html',
  styleUrl: './personajes-editar.component.css'
})
export class PersonajesEditarComponent {
  @Output() cerrar = new EventEmitter<void>();
  @Input() personajecreado!: Personaje;  
  @Input() transformacion!: Transformacion;
  @Output() guardar = new EventEmitter<any>();
  ki:number=0;
  cerrarModal(): void {
    this.cerrar.emit();
  }

  guardarCambios(): void {
    if (this.ki <= 0) {
      alert('El Ki debe ser mayor a 0.');
      return;
    }
    this.transformacion.ki=this.ki.toString();
    this.guardar.emit(this.transformacion); 
    this.cerrarModal();
  }
}
