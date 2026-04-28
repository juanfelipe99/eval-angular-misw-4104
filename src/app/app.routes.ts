import { Routes } from '@angular/router';
import { UsuarioList } from './usuarios/usuario-list/usuario-list';
import { RepositorioList } from './repositorios/repositorio-list/repositorio-list';

export const routes: Routes = [
  { path: 'usuarios', component: UsuarioList },
  { path: 'repositorios', component: RepositorioList },
];
