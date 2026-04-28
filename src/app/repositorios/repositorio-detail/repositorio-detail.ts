import { Component, OnInit, HostListener, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Repositorio } from '../repositorio';
import { Repositorios } from '../repositorios';

@Component({
  standalone: true,
  selector: 'app-repositorio-detail',
  imports: [CommonModule],
  templateUrl: './repositorio-detail.html',
  styleUrl: './repositorio-detail.css',
})
export class RepositorioDetail implements OnInit {
  repositorioDetail = signal<Repositorio | undefined>(undefined);

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private repositorios: Repositorios,
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.repositorios.getRepositorios().subscribe((repos) => {
      this.repositorioDetail.set(repos.find((r) => r.id === id));
    });
  }

  onClose() {
    this.router.navigate(['/repositorios']);
  }

  @HostListener('document:keydown.escape')
  onEscape() {
    this.onClose();
  }
}
