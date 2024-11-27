import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TareaComponent } from './pages/tarea/tarea.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'todo';
}
