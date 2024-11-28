import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonajeService } from '../services/personajes.service';

@Component({
  selector: 'app-personajes-transformaciones',
  templateUrl: './personajes-transformaciones.component.html',
  styleUrl: './personajes-transformaciones.component.css'
})
export class PersonajesTransformacionComponent implements OnInit {
  transformaciones: any[] = [];
  personajeName: string = '';
  personajes: any[] = [];
  currentIndex: number = 0;
  personajeId: number = 0; 
  constructor(
    private route: ActivatedRoute,
    private personajesService: PersonajeService
  ) {}

  ngOnInit(): void {
    this.cargarPersonajes();
  }

  cargarPersonajes(): void {
    this.personajesService.getCharacters().subscribe(
      (data) => {
        this.personajes = data.items;
        if (this.personajes.length > 0) {
          this.currentIndex = 0;
          this.actualizarPersonajeActual();
        }
      },
      (error) => console.error('Error al cargar personajes:', error)
    );
  }

  actualizarPersonajeActual(): void {
    if (this.personajes.length > 0 && this.currentIndex >= 0) {
      this.personajeId = this.personajes[this.currentIndex].id;
      this.cargarTransformaciones(this.personajeId);
    }
  }

  cargarTransformaciones(id: number): void {
    const storedData = localStorage.getItem(`transformaciones_personaje_${id}`);
    if (storedData) {
      this.transformaciones = JSON.parse(storedData);
      this.personajeName = this.personajes[this.currentIndex]?.name || '';
    } else {
      this.personajesService.getCharacterById(id).subscribe(
        (data) => {
          this.transformaciones = data.transformations || [];
          this.personajeName = data.name;
          localStorage.setItem(`transformaciones_personaje_${id}`, JSON.stringify(this.transformaciones));
        },
        (error) => console.error('Error al cargar transformaciones:', error)
      );
    }
  }

  updateKi(index: number, newKi: number): void {
    if (newKi <= 0) {
      alert('El Ki debe ser mayor a 0.');
      return;
    }
    this.transformaciones[index].ki = newKi;
    localStorage.setItem(`transformaciones_personaje_${this.personajeId}`, JSON.stringify(this.transformaciones));

    alert('Ki actualizado correctamente.');
  }

  siguientePersonaje(): void {
    if (this.currentIndex < this.personajes.length - 1) {
      this.currentIndex++;
      this.actualizarPersonajeActual();
    }
  }

  anteriorPersonaje(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.actualizarPersonajeActual();
    }
  }
}
