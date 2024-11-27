import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  constructor(private http: HttpClient) {
  }

  getTareaId(id: string) {
    return this.http.get('http://localhost:3000/tareas/'+id);
  }
  getTareas() {
    return this.http.get('http://localhost:3000/tareas');
  }
  postTarea(tarea: any) {
    return this.http.post('http://localhost:3000/tareas', tarea);
  }

}
