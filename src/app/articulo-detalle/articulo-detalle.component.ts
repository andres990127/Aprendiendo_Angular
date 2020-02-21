import { Component, OnInit } from '@angular/core';
import { ArticulosService } from '../services/articulos.service';
import { Articulo } from '../Models/articulo';

@Component({
  selector: 'app-articulo-detalle',
  templateUrl: './articulo-detalle.component.html',
  styleUrls: ['./articulo-detalle.component.scss']
})
export class ArticuloDetalleComponent implements OnInit {
  articulo: Articulo = new Articulo();
  constructor(private ArticuloInyectado: ArticulosService) { 
    this.articulo = this.ArticuloInyectado.articulo
  }
  
  ngOnInit() {
  }

}