import { Injectable } from '@angular/core';

export interface TodoItem {
  id: number
  title: string
  completed: boolean
}

const startTodos: TodoItem[] = [
  {id: 1, title: 'Помыть руки', completed: true},
  {id: 2, title: 'Сделать зарядку', completed: false},
  {id: 3, title: 'Наконец изучить React', completed: true}
]

@Injectable({
  providedIn: 'root'
}) 
export class TodoListService {
  public todos: TodoItem[] = startTodos

  public deleteTodo(id: number) :void {
    let findElem = this.todos.findIndex(el => el.id === id)
    this.todos.splice(findElem, 1)
  }

  public changeTodo(id: number) :void {
    let findELem: TodoItem | undefined = this.todos.find(el => el.id === id)
    findELem!.completed = !findELem!.completed
  }

  public addTodo(title: string){
    let newTodo: TodoItem = {
      id: Date.now(),
      completed: false,
      title
    }
    this.todos.push(newTodo)
  }
}
