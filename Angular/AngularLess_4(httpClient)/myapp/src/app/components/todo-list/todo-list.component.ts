import { Component, OnInit } from '@angular/core';
import { Todo, TodosService } from '../../services/todos.service';
import { Observable, tap } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit{
  public todos$: Observable<Todo[]>
  constructor(private todoSrvice: TodosService){}

  ngOnInit(): void {
      this.todos$ = this.todoSrvice.getTodos()
      this.todos$.subscribe((x) => console.log(1,x))
  }
}
