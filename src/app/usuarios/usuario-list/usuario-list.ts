import { Component, OnInit, signal } from '@angular/core';
import { Usuarios } from '../usuarios';
import { Usuario } from '../usuario';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-usuario-list',
  imports: [CommonModule],
  templateUrl: './usuario-list.html',
  styleUrl: './usuario-list.css',
})
export class UsuarioList implements OnInit {
  usuariosArray = signal<Usuario[]>([]);

  constructor(private usuarios: Usuarios) {}

  getUsuarios() {
    this.usuarios.getUsuarios().subscribe((usuarios) => {
      this.usuariosArray.set(usuarios);
    });
  }

  ngOnInit() {
    this.getUsuarios();
  }
}
