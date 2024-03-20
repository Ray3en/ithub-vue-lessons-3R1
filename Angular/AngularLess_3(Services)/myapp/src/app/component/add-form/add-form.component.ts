import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoListService } from '../../service/todo-list.service';

@Component({
  selector: 'app-add-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-form.component.html'
})
export class AddFormComponent {
  public TodoService = inject(TodoListService)
  public title: string = ''

  public addHandle() :void{
    this.TodoService.addTodo(this.title)
  }
}
