import { LoginService } from '../../service/login.service';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DefautLoginLayoutComponent } from '../../components/defaut-login-layout/defaut-login-layout.component';
import { CommonModule } from '@angular/common';
import { PrimaryInputComponent } from "../../components/primary-input/primary-input.component";
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { inject } from '@angular/core';

interface SignupForm {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

@Component({
  selector: 'app-signup',
  imports: [
    DefautLoginLayoutComponent,
    CommonModule,
    ReactiveFormsModule,
    PrimaryInputComponent,
],
providers: [
  LoginService
],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  signupForm!: FormGroup;
  private readonly toastr = inject(ToastrService);

  constructor(
    private readonly fb: FormBuilder,
    private readonly router: Router,
    private readonly LoginService: LoginService,


  ){
    this.signupForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      passwordConfirm: new FormControl('', [Validators.required, Validators.minLength(6)])
    })
  }

  submit() {
   this.LoginService.login(this.signupForm.value.email, this.signupForm.value).subscribe({
      next: () => this.toastr.success('Login successful!'),
      error: () => this.toastr.error('Login failed!')
   })

  }

  navigate() {
    this.router.navigate(['']);
  }
}
