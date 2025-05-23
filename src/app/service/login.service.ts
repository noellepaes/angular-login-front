import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponse } from '../types/login-response';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  apiUrl = 'http://localhost:8080/auth';
  constructor(
    private readonly http: HttpClient
  ) {}

  login( email: string, password: string) {
    return this.http.post<LoginResponse>(this.apiUrl + "/login", { email, password }).pipe(
      tap((value) => {
        sessionStorage.setItem('auth-token', value.token);
        sessionStorage.setItem('userName', value.name);
      })
    );
  }

  signup(name: string, email: string, password: string) {
    return this.http.post<LoginResponse>(this.apiUrl + "/register", { name, email, password }).pipe(
      tap((value) => {
        sessionStorage.setItem('auth-token', value.token);
        sessionStorage.setItem('userName', value.name);
      })
    );
  }
}
