import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActividadService {

  constructor(private http: HttpClient) {
  }

  getActividades() {
    return this.http.get('http://localhost:3000/actividads');
  }
  postActividad(actividad: any) {
    return this.http.post('http://localhost:3000/actividads', actividad);
  }
}
