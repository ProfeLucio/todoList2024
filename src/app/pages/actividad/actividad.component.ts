import { Component, OnInit } from '@angular/core';
import { ActividadService } from '../../services/actividad.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Actividad } from '../../models/actividad';
import { FormsModule } from '@angular/forms';
import { TareaService } from '../../services/tarea.service';
import { TareaModel } from '../../models/tareaModel';

@Component({
  selector: 'app-actividad',
  imports: [FormsModule, RouterLink],
  templateUrl: './actividad.component.html',
  styleUrl: './actividad.component.sass'
})
export class ActividadComponent implements OnInit {
  public idTarea: string = '';
  public loadTarea: TareaModel = new TareaModel();
  public actividadesList: Actividad[] = [];
  public visibleAdd: boolean = false;
  public nextId: string = '';
  public newActividad: Actividad = new Actividad();

  constructor(
    private actividadService: ActividadService,
    private tareaService: TareaService,
    private  activeRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.idTarea = this.activeRoute.snapshot.params['id'];
    this.tareaService.getTareaId(this.idTarea).subscribe((res: any) => {
      console.log(res);
      this.loadTarea = res;
    });
    this.actividadService.getActividades().subscribe((res: any) => {
      console.log(res);
      this.actividadesList = res.filter((actividad: Actividad) => actividad.tareaId === this.idTarea);
      this.nextId = String(this.actividadesList.length + 1);
      this.newActividad.id = this.nextId;
      this.newActividad.tareaId = this.idTarea;
    });
  }

  onGuardar() {
    this.actividadService.postActividad(this.newActividad).subscribe((res: any) => {
      console.log(res);
      this.actividadesList.push(res);
      this.newActividad = new Actividad();
      this.nextId = String(this.actividadesList.length + 1);
      this.newActividad.id = this.nextId;
      this.newActividad.tareaId = this.idTarea;
    });
  }

}
