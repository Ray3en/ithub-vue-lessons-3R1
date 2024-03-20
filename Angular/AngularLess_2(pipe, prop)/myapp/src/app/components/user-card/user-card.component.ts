import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {
@Input() public id: number
@Input() public name: string
@Input() public age: number

@Output() public deleteUserById: EventEmitter<any> = new EventEmitter()

public deleteUser():void{
  this.deleteUserById.emit(this.id)
}
}
