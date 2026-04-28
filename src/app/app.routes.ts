import { Routes } from '@angular/router';
import { Home } from './home/home';
import { UsuarioList } from './usuarios/usuario-list/usuario-list';
import { RepositorioList } from './repositorios/repositorio-list/repositorio-list';
import { RepositorioDetail } from './repositorios/repositorio-detail/repositorio-detail';

export const routes: Routes = [
  { path: '', component: Home, pathMatch: 'full' },
  { path: 'usuarios', component: UsuarioList },
  { path: 'repositorios', component: RepositorioList },
  { path: 'repositorios/:id', component: RepositorioDetail },
];
