import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Personaje } from './../interfaces/personaje.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PersonajeService {
  constructor(private http: HttpClient) {}

  searchPersonajes(query = "", page = 1) {
    return this.http.get<Personaje[]>(
      ` ${environment.baseUrl}/?name=${query}&page=${page}`
    );
  }

  getDetails(id: number) {
    return this.http.get<Personaje>(`${environment.baseUrl}/${id}`);
  }
}
