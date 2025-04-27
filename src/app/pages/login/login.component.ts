import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DefautLoginLayoutComponent } from '../../components/defaut-login-layout/defaut-login-layout.component';
import { CommonModule } from '@angular/common';
import { PrimaryInputComponent } from "../../components/primary-input/primary-input.component";

@Component({
  selector: 'app-login',
  imports: [
    DefautLoginLayoutComponent,
    CommonModule,
    ReactiveFormsModule,
    PrimaryInputComponent
],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  formLogin!: FormGroup;

  constructor(private readonly fb: FormBuilder) {
    this.formLogin = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.formLogin.valid) {
      console.log(this.formLogin.value);
    }
  }

  submit() {
    console.log(this.formLogin.value);
  }
}
