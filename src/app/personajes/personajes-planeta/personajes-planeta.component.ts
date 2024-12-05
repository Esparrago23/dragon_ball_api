import { Component,Output,EventEmitter,OnInit} from '@angular/core';
import { PersonajeService } from '../services/personajes.service';
import { ActivatedRoute } from '@angular/router';
import { Planeta } from '../models/Planeta';
@Component({
  selector: 'app-personajes-planeta',
  templateUrl: './personajes-planeta.component.html',
  styleUrl: './personajes-planeta.component.css'
})
export class PersonajesPlanetaComponent implements OnInit {
  @Output() cerrar = new EventEmitter<void>();
  constructor(
    private route: ActivatedRoute,
    private personajesService: PersonajeService,
  ) {}
  ngOnInit(): void {
  
    this.cargarPlaneta();
  }
  cargarPlaneta():void{
    let id:number=0;
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      id = idParam ? +idParam : 1; 
      console.log('ID recibido:', id);
    });
    this.personajesService.obtenerPlanetaPorId(id).subscribe(
      (data:Planeta) => {
       data.personaje
      },
      (error) => console.error('Error al cargar planeta:', error)
    );
  }
  cerrarModal(): void {
    this.cerrar.emit();
  }
}
