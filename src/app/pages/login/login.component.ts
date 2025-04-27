import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DefautLoginLayoutComponent } from '../../components/defaut-login-layout/defaut-login-layout.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [
    DefautLoginLayoutComponent,
    CommonModule,
    ReactiveFormsModule
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
}
