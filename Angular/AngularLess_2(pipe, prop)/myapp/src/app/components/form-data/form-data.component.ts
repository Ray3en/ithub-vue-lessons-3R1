import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-data',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-data.component.html',
  styleUrl: './form-data.component.css'
})
export class FormDataComponent {
  public input_data: string = ''
  public text_area_data: string = ''
  public select_data: string = ''
}
