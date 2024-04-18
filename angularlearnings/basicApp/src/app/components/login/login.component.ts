import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  email = new FormControl("",[Validators.required, Validators.email])
  password = new FormControl("",[Validators.required, Validators.minLength(6)])

  loginForm = new FormGroup({
    email: this.email,
    password: this.password
  })

  @ViewChild('toggle', { static: false }) checkBox?:ElementRef
  login(){
    console.log(this.loginForm.value)
  }

  onShowPassword(e: any) {
    const checkBox = this.checkBox?.nativeElement as HTMLInputElement;
    checkBox.type = checkBox.type === "text" ? "password" : "text";
    console.log(checkBox.type);
  }
  
}
