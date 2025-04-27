import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-defaut-login-layout',
  imports: [CommonModule],
  templateUrl: './defaut-login-layout.component.html',
  styleUrl: './defaut-login-layout.component.scss'
})
export class DefautLoginLayoutComponent {
  @Input() title: string = '';
  @Input() primaryButtonText: string = '';
}
