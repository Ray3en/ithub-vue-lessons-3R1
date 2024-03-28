import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-content-example',
  standalone: true,
  imports: [],
  templateUrl: './content-example.component.html',
  styleUrl: './content-example.component.css'
})
export class ContentExampleComponent implements 
  OnChanges,  
  OnInit,
  DoCheck,
  AfterViewInit,
  AfterContentInit,
  AfterViewChecked,
  AfterContentChecked
{

  @Input() counter: number;
  constructor (){
    console.log('Init', 'ChildComponent')
  }

  ngOnChanges(changes: SimpleChanges): void {
      console.log('%c onChanges ChildComponent', 'color: red')
      console.log(changes)
  }

  ngOnInit(): void {
      console.log('%c ngOnInit ChildComponent','color: red')
  }

  ngAfterViewInit(): void {
      console.log('%c ngAfterViewInit ChildComponent', 'color: red')
  }

  ngAfterContentInit(): void {
      console.log('%c ngAfterContentInit ChildComponent', 'color: red')
  }

  ngDoCheck(): void {
      console.log('%c ngDoCheck ChildComponent', 'color: red')
  }

  ngAfterViewChecked(): void {
      console.log('%c ngAfterViewChecked ChildComponent', 'color: red')
      console.log('-------------------------------')
  }

  ngAfterContentChecked(): void {
      console.log('%c ngAfterContentChecked ChildComponent', 'color: red')
  }
}