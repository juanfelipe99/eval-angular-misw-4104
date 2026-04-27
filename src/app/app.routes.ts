import { Routes } from '@angular/router';
import { UsuarioList } from './usuarios/usuario-list/usuario-list';

export const routes: Routes = [
  { path: '', pathMatch: 'full', children: [
    { path: '', component: UsuarioList },
  ] },
  { path: 'usuarios', component: UsuarioList },
];
