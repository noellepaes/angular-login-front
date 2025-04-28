import { LoginService } from './../../service/login.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DefautLoginLayoutComponent } from '../../components/defaut-login-layout/defaut-login-layout.component';
import { CommonModule } from '@angular/common';
import { PrimaryInputComponent } from "../../components/primary-input/primary-input.component";
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { inject } from '@angular/core';


@Component({
  selector: 'app-login',
  imports: [
    DefautLoginLayoutComponent,
    CommonModule,
    ReactiveFormsModule,
    PrimaryInputComponent,
],
providers: [
  LoginService
],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  formLogin!: FormGroup;
  private readonly toastr = inject(ToastrService);

  constructor(
    private readonly fb: FormBuilder,
    private readonly router: Router,
    private readonly LoginService: LoginService,


  ){
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
   this.LoginService.login(this.formLogin.value.email, this.formLogin.value).subscribe({
      next: (response) => this.toastr.success('Login successful!'),
      error: (error) => this.toastr.error('Login failed!')
   })

  }

  navigate() {
    this.router.navigate(['/signup']);
  }
}
