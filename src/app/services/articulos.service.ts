import { Injectable } from '@angular/core';
import { Articulo } from '../Models/articulo';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../Models/User';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {
  articulo: Articulo = new Articulo();
  constructor(private http: HttpClient) { } // Se invoca el http aqui


  leerNoticias() : Observable<Articulo[]>
  {
    return this.http.get<Articulo[]>('https://jsonplaceholder.typicode.com/posts');
  }

  leerUsuario(userId: number) : Observable<User>
  {
    return this.http.get<User>('https://jsonplaceholder.typicode.com/users/'+ userId)
  }

  guardarArticulo(articulo: Articulo) : Observable<Articulo>
  {
    return this.http.post<Articulo>('https://jsonplaceholder.typicode.com/posts', articulo)
  }

  leerTodosLosUsuarios(): Observable<User[]>
  {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users')
  }
}