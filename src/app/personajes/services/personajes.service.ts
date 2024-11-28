import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Characters } from '../models/characters';

@Injectable({
  providedIn: 'root'
})
export class PersonajeService {
 url_base: string = "https://dragonball-api.com/api/characters"
  constructor(private _http: HttpClient) { }
 
  getCharacters(): Observable<Characters> {
    return this._http.get<Characters>(`${this.url_base}`);
  }

  getCharacterById(id: number): Observable<any> {
    return this._http.get<any>(`${this.url_base}/${id}`);
  }
}
