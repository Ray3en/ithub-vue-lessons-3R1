import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PipeExampleComponent } from './components/pipe-example/pipe-example.component';
import { FormDataComponent } from './components/form-data/form-data.component';
import { EventDataComponent } from './components/event-data/event-data.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { LifeMethodsComponent } from './components/life-methods/life-methods.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, PipeExampleComponent, FormDataComponent, EventDataComponent, UserListComponent, LifeMethodsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
