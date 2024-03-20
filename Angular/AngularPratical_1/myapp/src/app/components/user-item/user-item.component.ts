import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-item',
  standalone: true,
  imports: [],
  templateUrl: './user-item.component.html',
  styleUrl: './user-item.component.css'
})
export class UserItemComponent {
@Input() name: string 
@Input() username: string 
@Input() website: string 
@Input() email: string 
}
