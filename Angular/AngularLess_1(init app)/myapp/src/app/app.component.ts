import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { NumberComponent } from './components/number/number.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, UserListComponent, NumberComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myapp';
  name = 'wrapper'
  number = 6
  isShow = false
  array = [1,2,3,4,5]
  users = [
    {id: 1, name: 'Alex', age: 18},
    {id: 2, name: 'Steven', age: 19},
    {id: 3, name: 'Dima', age: 17},
    {id: 4, name: 'Neena', age: 15},
  ]

}
