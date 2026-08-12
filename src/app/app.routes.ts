import { Routes } from '@angular/router';
import { Main } from './components/pages/main/main';
import { Login } from './components/pages/login/login';

export const routes: Routes = [
  { path: '', component: Login },
  { path: 'main', component: Main },
];
