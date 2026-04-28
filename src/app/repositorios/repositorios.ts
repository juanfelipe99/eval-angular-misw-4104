import { Injectable } from '@angular/core';
import { Repositorio } from './repositorio';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class Repositorios {
  private apiUrl = environment.repositoriosApiEndpoint;

  constructor(private http: HttpClient) {}

  getRepositorios(): Observable<Repositorio[]> {
    return this.http.get<Repositorio[]>(this.apiUrl);
  }
}
