import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-number',
  standalone: true,
  imports: [],
  templateUrl: './number.component.html',
  styleUrl: './number.component.css'
})
export class NumberComponent {
@Input() number: number
}
