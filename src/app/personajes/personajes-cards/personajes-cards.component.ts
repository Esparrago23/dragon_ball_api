import { Component,OnInit } from '@angular/core';
import { Links } from '../models/links';
import { Meta } from '../models/meta';
import { Personaje } from '../models/personaje';
import { PersonajeService } from '../services/personajes.service';
import { Characters } from '../models/characters';
import { Router } from '@angular/router';
@Component({
  standalone: false,
  selector: 'app-personajes-cards',
  templateUrl: './personajes-cards.component.html',
  styleUrl: './personajes-cards.component.css'
})
export class PersonajesCardsComponent implements OnInit{
personajes:Personaje[]=[];
showModal: boolean = false;
meta: Meta = {
  totalItems: 0,
  itemCount: 0,
  itemsPerPage: 10,
  totalPages: 0,
  currentPage: 1,
};
links: Links = {
  first: '',
  previous: null,
  next: null,
  last: '',
};
constructor( private personajesService:PersonajeService, private router: Router){}

ngOnInit(): void {
    this.cargarPersonajes();
}
cargarPersonajes():void{
  this.personajesService.getCharacters().subscribe(data=>{
    this.personajes = data.items;
    this.meta = data.meta;
    this.links = data.links;
  console.log(this.personajes);
  })
}

verTransformaciones(id: number): void {
  console.log('ID del personaje:', id);
  this.router.navigate(['/transformaciones', id]);
}

verModal(): void{
  this.showModal = true
}

cerrarModal(): void{
  this.showModal = false
}

}
