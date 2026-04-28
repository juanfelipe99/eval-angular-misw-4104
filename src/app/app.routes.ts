import { Routes } from '@angular/router';
import { Home } from './home/home';
import { UsuarioList } from './usuarios/usuario-list/usuario-list';
import { RepositorioList } from './repositorios/repositorio-list/repositorio-list';

export const routes: Routes = [
  { path: '', component: Home, pathMatch: 'full' },
  { path: 'usuarios', component: UsuarioList },
  { path: 'repositorios', component: RepositorioList },
];
