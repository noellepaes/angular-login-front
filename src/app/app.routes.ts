import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DefautLoginLayoutComponent } from './components/defaut-login-layout/defaut-login-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: DefautLoginLayoutComponent,
  },
];
