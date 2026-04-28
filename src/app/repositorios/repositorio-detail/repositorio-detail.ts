import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Repositorio } from '../repositorio';

@Component({
  standalone: true,
  selector: 'app-repositorio-detail',
  imports: [CommonModule],
  templateUrl: './repositorio-detail.html',
  styleUrl: './repositorio-detail.css',
})
export class RepositorioDetail {
  @Input() repositorioDetail: Repositorio | undefined;
  @Output() close = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }

  @HostListener('document:keydown.escape')
  onEscape() {
    this.onClose();
  }
}
