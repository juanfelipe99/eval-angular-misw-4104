import { Component, OnInit, signal } from '@angular/core';
import { Repositorios } from '../repositorios';
import { Repositorio } from '../repositorio';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-repositorio-list',
  imports: [CommonModule, RouterLink],
  templateUrl: './repositorio-list.html',
  styleUrl: './repositorio-list.css',
})
export class RepositorioList implements OnInit {
  repositoriosArray = signal<Repositorio[]>([]);

  constructor(private repositorios: Repositorios) {}

  getRepositorios() {
    this.repositorios.getRepositorios().subscribe((repositorios) => {
      this.repositoriosArray.set(repositorios);
    });
  }

  ngOnInit() {
    this.getRepositorios();
  }
}
