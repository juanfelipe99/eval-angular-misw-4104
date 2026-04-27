import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Usuario } from '../usuario';

@Component({
  standalone: true,
  selector: 'app-usuario-detail',
  imports: [CommonModule],
  templateUrl: './usuario-detail.html',
  styleUrl: './usuario-detail.css',
})
export class UsuarioDetail {
  @Input() usuarioDetail: Usuario | undefined;
  @Output() close = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }

  @HostListener('click', ['$event'])
  onBackdropClick(event: MouseEvent) {
    if (event.target === event.currentTarget) {
      this.onClose();
    }
  }

  @HostListener('document:keydown.escape')
  onEscape() {
    this.onClose();
  }
}
