import { Component, OnInit } from '@angular/core';
import { TareaService } from '../../services/tarea.service';
import { TareaModel } from '../../models/tareaModel';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tarea',
  imports: [FormsModule, RouterLink],
  templateUrl: './tarea.component.html',
  styleUrl: './tarea.component.sass'
})
export class TareaComponent implements OnInit {
  public tareasList: TareaModel[] = [];
  public newTarea: TareaModel = new TareaModel();
  public nextId: string = '';
  public visibleAdd: boolean = false;
  constructor(private tareaService: TareaService) {
  }

  ngOnInit() {
    this.tareaService.getTareas().subscribe((res: any) => {
      console.log(res);
      this.tareasList = res;
      this.nextId = String(this.tareasList.length + 1);
      this.newTarea.id = this.nextId;
    });
  }

  onGuardar() {
    this.tareaService.postTarea(this.newTarea).subscribe((res: any) => {
      console.log(res);
      this.tareasList.push(res);
      this.newTarea = new TareaModel();
      this.nextId = String(this.tareasList.length + 1);
      this.newTarea.id = this.nextId;
    });
  }

}
