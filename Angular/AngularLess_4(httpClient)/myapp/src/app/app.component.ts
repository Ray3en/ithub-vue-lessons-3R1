import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { ContentExampleComponent } from './components/content-example/content-example.component';
import { FormExampleComponent } from './components/form-example/form-example.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TodoListComponent, ContentExampleComponent, FormExampleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent 
// implements  
//   OnInit,
//   AfterViewInit,
//   AfterContentInit,
//   AfterViewChecked,
//   AfterContentChecked
{
  title = 'myapp';

  counter = 0

  incr(){
    this.counter++
  }

  // constructor (){
  //   console.log('Init', 'ParentComponent')
  // }

  // ngOnInit(): void {
  //     console.log('ngOninit', 'ParentComponent')
  // }

  // ngAfterViewInit(): void {
  //     console.log('ngAfterViewInit', 'ParentComponent')
  // }

  // ngAfterContentInit(): void {
  //     console.log('ngAfterContentInit', 'ParentComponent')
  // }

  // ngAfterViewChecked(): void {
  //     console.log('ngAfterViewChecked', 'ParentComponent')
  //     console.log('-------------------------------')
  // }

  // ngAfterContentChecked(): void {
  //     console.log('ngAfterContentChecked', 'ParentComponent')
  // }
}
