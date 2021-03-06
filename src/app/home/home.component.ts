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

    let articuloEnviar: Articulo = new Articulo();
    articuloEnviar.body = 'Este es el cuerpo del articulo';
    articuloEnviar.title = 'Este es el titulo';
    articuloEnviar.userId = 4;
    this.ArticuloInyectado.guardarArticulo(articuloEnviar).subscribe((articuloCreado)=>{
/*       debugger */
      this.articulos.push(articuloCreado);
    })
    }
  
  irAlDetalle(articulo: Articulo)
  {
    this.ArticuloInyectado.articulo = articulo;
    this.ruta.navigateByUrl('/articulo-detalle');
  }

  borrar(id : number){
    this.ArticuloInyectado.borrarArticulo(id).subscribe((datos)=>{
      console.log(datos);
    })
  }

  Actualizar(articulo : Articulo)
  {
/*     articulo.title = "Este titulo esta editado"
    articulo.body = "Este es el cuerpo editado" 
 
     this.ArticuloInyectado.actualizarArticulo(articulo).subscribe((articuloRecibido)=>{
      console.log(articuloRecibido);
    })  */
    this.ArticuloInyectado.articulo = articulo;
    this.ruta.navigateByUrl('/agregar-articulo/false');
  }

}
