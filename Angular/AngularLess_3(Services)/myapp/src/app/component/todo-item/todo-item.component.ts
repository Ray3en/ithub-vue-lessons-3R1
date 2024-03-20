import { Component, Input, inject } from '@angular/core';
import { TodoListService } from '../../service/todo-list.service';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [],
  templateUrl: './todo-item.component.html',
})
export class TodoItemComponent {
  @Input() public id: number
  @Input() public title: string
  @Input() public completed: boolean

  public TodoService = inject(TodoListService)

  public deleteTodo():void{
    this.TodoService.deleteTodo(this.id)
  }

  public changeTodo():void {
    this.TodoService.changeTodo(this.id)
  }
}
