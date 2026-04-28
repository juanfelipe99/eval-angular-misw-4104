import { Component, OnInit, signal } from '@angular/core';
import { Repositorios } from '../repositorios';
import { Repositorio } from '../repositorio';
import { CommonModule } from '@angular/common';
import { RepositorioDetail } from '../repositorio-detail/repositorio-detail';

@Component({
  standalone: true,
  selector: 'app-repositorio-list',
  imports: [CommonModule, RepositorioDetail],
  templateUrl: './repositorio-list.html',
  styleUrl: './repositorio-list.css',
})
export class RepositorioList implements OnInit {
  repositoriosArray = signal<Repositorio[]>([]);
  selected = signal<boolean>(false);
  selectedRepositorio = signal<Repositorio | undefined>(undefined);

  constructor(private repositorios: Repositorios) {}

  getRepositorios() {
    this.repositorios.getRepositorios().subscribe((repositorios) => {
      this.repositoriosArray.set(repositorios);
    });
  }

  ngOnInit() {
    this.getRepositorios();
  }

  onSelected(repositorio: Repositorio) {
    this.selected.set(true);
    this.selectedRepositorio.set(repositorio);
  }

  onCloseDetail() {
    this.selected.set(false);
    this.selectedRepositorio.set(undefined);
  }
}