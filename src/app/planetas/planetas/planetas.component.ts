import { Component, OnInit, Input } from '@angular/core';
import { PlanetaService } from '../services/planeta.service';

@Component({
  standalone: false,
  selector: 'app-planetas',
  templateUrl: './planetas.component.html',
  styleUrl: './planetas.component.css'
})
export class PlanetasComponent implements OnInit {
 @Input() personajeid! : number;
 planeta: any

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
}
