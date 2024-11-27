import { Routes } from '@angular/router';
import { TareaComponent } from './pages/tarea/tarea.component';
import { ActividadComponent } from './pages/actividad/actividad.component';

export const routes: Routes = [
  { path: '', redirectTo: 'tareas', pathMatch: 'full' },
  { path: 'tareas', component: TareaComponent },
  { path: 'actividades/:id', component: ActividadComponent },

];
