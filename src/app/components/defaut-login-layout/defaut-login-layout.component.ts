import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

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
}
