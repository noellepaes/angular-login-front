import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-defaut-login-layout',
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './defaut-login-layout.component.html',
  styleUrl: './defaut-login-layout.component.scss'
})
export class DefautLoginLayoutComponent {
  @Input() title: string = '';
  @Input() primaryButtonText: string = '';
  @Input() desablePrimaryBtn: boolean = true;

  @Output("submit") onSubmit = new EventEmitter();
  @Output("navigate") onNavigate = new EventEmitter();

  constructor(private readonly router: Router) {}

  submit() {
    this.onSubmit.emit();
  }

  navigate() {
    this.onNavigate.emit();
  }


}
