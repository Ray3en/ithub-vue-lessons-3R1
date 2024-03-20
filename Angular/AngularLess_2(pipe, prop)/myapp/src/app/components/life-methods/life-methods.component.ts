import { JsonPipe } from '@angular/common';
import { Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-life-methods',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './life-methods.component.html'
})
export class LifeMethodsComponent implements OnInit, OnDestroy, OnChanges, DoCheck {

  public message: string = 'Some value'
  public data: any = [] 

  constructor(){
    console.log('Component start init')
  }

  // Пока что не работает
  ngOnChanges(changes: SimpleChanges): void {
      console.log(changes['message'].currentValue)
  }

  // Инициализация компонента
  // ngOnInit(): void {
  //     console.log('Component was init')
  // }

  // Http запрос
  ngOnInit(): void {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => {
          this.data = data
        })
  }

  ngDoCheck(): void {
      console.log('Props was updated')
  }

  ngOnDestroy(): void {
      console.log('Component was deleted')
  }
  
  public changeMessage(){
    this.message = 'VALUE'
  }

}
