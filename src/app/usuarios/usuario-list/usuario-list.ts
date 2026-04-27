import { Component, OnInit, signal } from '@angular/core';
import { Usuarios } from '../usuarios';
import { Usuario } from '../usuario';
import { CommonModule } from '@angular/common';
import { UsuarioDetail } from '../usuario-detail/usuario-detail';

@Component({
  standalone: true,
  selector: 'app-usuario-list',
  imports: [CommonModule, UsuarioDetail],
  templateUrl: './usuario-list.html',
  styleUrl: './usuario-list.css',
})
export class UsuarioList implements OnInit {
  usuariosArray = signal<Usuario[]>([]);
  selected = signal<boolean>(false);
  selectedUser = signal<Usuario | undefined>(undefined);

  constructor(private usuarios: Usuarios) {}

  getUsuarios() {
    this.usuarios.getUsuarios().subscribe((usuarios) => {
      this.usuariosArray.set(usuarios);
    });
  }

  ngOnInit() {
    this.getUsuarios();
  }

  onSelected(usuario: Usuario) {
    this.selected.set(true);
    this.selectedUser.set(usuario);
  }

  onCloseDetail() {
    this.selected.set(false);
    this.selectedUser.set(undefined);
  }
}
