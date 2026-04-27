import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Usuario } from '../usuario';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Usuarios } from '../usuarios';

@Component({
  standalone: true,
  selector: 'app-usuario-detail',
  imports: [CommonModule, RouterModule],
  templateUrl: './usuario-detail.html',
  styleUrl: './usuario-detail.css',
})
export class UsuarioDetail implements OnInit {
  @Input() usuarioDetail: Usuario | undefined;

  constructor() {}

  getUsuario() {}

  ngOnInit() {}
}
