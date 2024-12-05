import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonajeService } from '../services/personajes.service';
import { Router } from '@angular/router';
import { Personaje } from '../models/personaje';
import { Transformacion } from '../models/transformations';

@Component({
  selector: 'app-personajes-transformaciones',
  templateUrl: './personajes-transformaciones.component.html',
  styleUrls: ['./personajes-transformaciones.component.css']
})
export class PersonajesTransformacionComponent implements OnInit {
  transformaciones: Transformacion[] = [];
  personajeName: string = '';
  personajes: Personaje[] = [];
  currentIndex: number = 0;
  personajeId: number = 0;
  modalAbierto = false;
  personajeSeleccionado: Personaje ={
    id:0,
    name:"",
    ki:"",
    maxKi:"",
    race:"",
    gender:"",
    description:"",
    image:"",
    affiliation:"",
    deletedAt:""
  };

  constructor(
    private route: ActivatedRoute,
    private personajesService: PersonajeService,
    private router: Router
  ) {}
  id: number=1;;
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      this.id = idParam ? +idParam : 1; // Convierte el id a número
      console.log('ID recibido:', this.id);
    });
    this.cargarPersonajes();
  }

  cargarPersonajes(): void {
    this.personajesService.getCharacters().subscribe(
      (data) => {
        this.personajes = data.items;
        if (this.personajes.length > 0) {
          this.currentIndex = 0;
         
          this.cargarTransformaciones(this.id);
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

  abrirModal(transformacion: any): void {
    this.personajeSeleccionado = { ...transformacion };
    this.modalAbierto = true;
  }

  cerrarModal(): void {
    this.modalAbierto = false;
  }

  guardarTransformacionActualizada(transformacionActualizada: any): void {
    const index = this.transformaciones.findIndex(t => t.name === transformacionActualizada.name);
    if (index > -1) {
      this.transformaciones[index] = transformacionActualizada;
      localStorage.setItem(`transformaciones_personaje_${this.personajeId+1}`, JSON.stringify(this.transformaciones));
      alert('Transformación actualizada correctamente.');
    }
    this.cerrarModal();
  }


  VerPersonaje(): void {
    localStorage.removeItem(`transformaciones_personaje_${this.id}`);
    this.router.navigate(['/Personajes']);
  }
}
