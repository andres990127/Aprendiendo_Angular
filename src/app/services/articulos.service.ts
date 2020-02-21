import { Injectable } from '@angular/core';
import { Articulo } from '../Models/articulo';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {
  articulo: Articulo = new Articulo();
  constructor() { }
}
