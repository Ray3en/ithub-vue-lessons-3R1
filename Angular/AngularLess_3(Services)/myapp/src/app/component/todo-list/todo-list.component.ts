import { Component, inject } from '@angular/core';
import { TodoItem, TodoListService } from '../../service/todo-list.service';
import { TodoItemComponent } from '../todo-item/todo-item.component';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [TodoItemComponent],
  templateUrl: './todo-list.component.html'
})
export class TodoListComponent {
  public todos: TodoItem[] = inject(TodoListService).todos
}
