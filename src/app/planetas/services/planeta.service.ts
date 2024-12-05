import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlanetaService {

  url_base: string = "https://dragonball-api.com/api/characters"
  constructor(private _http: HttpClient) { }

  getCharacterById(id: number): Observable<any> {
    return this._http.get<any>(`${this.url_base}/${id}`);
  }
}
