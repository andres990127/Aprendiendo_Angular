import { Component, OnInit } from '@angular/core';
import { Articulo } from '../Models/articulo';
import { UsuarioService } from '../services/usuario.service';
import { ArticulosService } from '../services/articulos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  articulos: Array <Articulo> = new Array <Articulo> ();
  constructor(private UsuarioInyectado: UsuarioService, private ArticuloInyectado: ArticulosService,
    private ruta: Router
    ) { }

  ngOnInit() {
    this.ArticuloInyectado.leerNoticias().subscribe((articulosDesdeApi)=> {
      this.articulos = articulosDesdeApi;
    });
    }
  
  irAlDetalle(articulo: Articulo)
  {
    this.ArticuloInyectado.articulo = articulo;
    this.ruta.navigateByUrl('/articulo-detalle');
  }

}
