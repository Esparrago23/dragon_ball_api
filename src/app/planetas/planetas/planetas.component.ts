import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import { PlanetaService } from '../services/planeta.service';
import { Planeta } from '../../personajes/models/Planeta';
@Component({
  standalone: false,
  selector: 'app-planetas',
  templateUrl: './planetas.component.html',
  styleUrl: './planetas.component.css'
})
export class PlanetasComponent implements OnInit {
 @Input() personajeid! : number;
 planeta!: Planeta;
 @Output() cerrar = new EventEmitter<void>();

  constructor(private planetaService: PlanetaService) {}
  
  ngOnInit(): void {
    if (this.personajeid) {
      this.cargarPlaneta(this.personajeid);
    }
  }
  
  cargarPlaneta(id: number): void {
    this.planetaService.getCharacterById(id).subscribe((data) => {
      this.planeta = data.originPlanet;
    });
  }
  cerrarModal(): void {
    this.cerrar.emit();
  }
  
}
