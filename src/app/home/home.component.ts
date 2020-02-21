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
    this.articulos.push({
      titulo: "Curso de new core",
      descripcion: "Aqui se inserta un texto de descripcion",
      fecha : new Date(), //Fecha actual.
      usuario: `${this.UsuarioInyectado.usuario.nombre} ${this.UsuarioInyectado.usuario.apellido}`
    },
    {
      titulo: "Curso de Angular",
      descripcion: "Aqui se inserta un texto de descripcion",
      fecha : new Date('04/25/2019'),
      usuario: `${this.UsuarioInyectado.usuario.nombre} ${this.UsuarioInyectado.usuario.apellido}`
    },
    {
      titulo: "Curso de Flutter",
      descripcion: "Aqui se inserta un texto de descripcion",
      fecha : new Date('5/10/2019'),
      usuario: `${this.UsuarioInyectado.usuario.nombre} ${this.UsuarioInyectado.usuario.apellido}`
    })
  }
  irAlDetalle(articulo: Articulo)
  {
    this.ArticuloInyectado.articulo = articulo;
    this.ruta.navigateByUrl('/articulo-detalle');
  }

}
