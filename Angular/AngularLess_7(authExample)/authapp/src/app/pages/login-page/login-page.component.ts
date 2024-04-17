import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent implements OnInit {

  public dataForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  })

  constructor(private formBuilder: FormBuilder, private authService: AuthService){}

  ngOnInit(): void {
    this.dataForm = this.formBuilder.group({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    })
  }

  // ngOnDestroy(): void {
  //   this.authService.logout()
  // }

  onSubmit(){
    this.authService.login(this.dataForm.value)
      .subscribe({
        next: data => console.log(data), 
        error: e => console.log(e)
      })
  }

}
