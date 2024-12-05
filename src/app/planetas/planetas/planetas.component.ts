import { Component, OnInit } from '@angular/core';
import { PlanetaService } from '../services/planeta.service';

@Component({
  standalone: false,
  selector: 'app-planetas',
  templateUrl: './planetas.component.html',
  styleUrl: './planetas.component.css'
})
export class PlanetasComponent implements OnInit {

  constructor(private planetaService: PlanetaService) {}
  ngOnInit(): void {
      this.cargarPlaneta();
  }
  cargarPlaneta(): void{
    this.planetaService
  }
}
