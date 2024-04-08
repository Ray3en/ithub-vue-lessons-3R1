import { CommonModule, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-example',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, CommonModule] ,
  templateUrl: './form-example.component.html',
  styleUrl: './form-example.component.css'
})
export class FormExampleComponent implements OnInit {
    public dataForm: FormGroup = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      password: new FormControl(''),
      secondPassword: new FormControl(''),
    }
  )
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
      this.dataForm = this.formBuilder.group({
        firstName: ['', [Validators.required, Validators.minLength(5)]],
        lastName: ['', [Validators.required, Validators.pattern(/\w{3}/)]],
        password: ['', Validators.required],
        secondPassword: ['', Validators.required],
      }, 
      {
        validator: this.checkPassword
      }
    )
  }

  public checkPassword(group: FormGroup){
    const password = group.get('password')?.value
    const secondPassword = group.get('secondPassword')?.value
    return password === secondPassword ? null : {invalidPass: true}
  }

  public onSubmit():void{
    console.log(this.dataForm.valid, this.dataForm.value)
    console.log(this.dataForm)
    // console.log(this.dataForm?.errors?.passValidate)
  }
}
