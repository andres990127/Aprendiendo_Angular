import { Component, OnInit } from '@angular/core';
import { User } from '../Models/User';
import { ArticulosService } from '../services/articulos.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Articulo } from '../Models/articulo';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-agregar-articulo',
  templateUrl: './agregar-articulo.component.html',
  styleUrls: ['./agregar-articulo.component.scss']
})
export class AgregarArticuloComponent implements OnInit {
  usuarios: Array<User> = new Array<User>();
  formularioArticulo: FormGroup;
  articulo: Articulo = new Articulo();
  esNuevo: boolean = true;
  titulo: string = "";
  constructor(private ArticuloInyectado: ArticulosService, private fbGenerador: FormBuilder, private RutaActiva: ActivatedRoute) { }

  ngOnInit() {
    
    this.esNuevo = JSON.parse(this.RutaActiva.snapshot.params.esNuevo);
    this.titulo = this.esNuevo ? 'Agregar' : 'Editar'; // TERNARIO

    this.formularioArticulo= this.fbGenerador.group({
      title: ['', Validators.required],
      body: ['', Validators.required],
      userId: ['', Validators.required],
    })

    if(!this.esNuevo)
    {
      this.articulo = this.ArticuloInyectado.articulo;
      this.formularioArticulo.setValue({
        body: this.articulo.body,
        title: this.articulo.title,
        userId: this.articulo.userId
      })
    }

    this.ArticuloInyectado.leerTodosLosUsuarios().subscribe((usuarioRecibido)=>{
      this.usuarios = usuarioRecibido;
    })
  }

  agregar()
  {
    this.articulo = this.formularioArticulo.value as Articulo;
    this.ArticuloInyectado.guardarArticulo(this.articulo).subscribe((articuloRecibido)=>{
      console.log(articuloRecibido)
      console.log('Felicidades, has registrado el primer articulo')
      this.formularioArticulo.reset();
    })
  }

  editar()
  {
    this.articulo = this.formularioArticulo.value as Articulo;
    this.articulo.id = this.ArticuloInyectado.articulo.id;
    this.ArticuloInyectado.actualizarArticulo(this.articulo).subscribe((articuloRecibido)=>{
      console.log(articuloRecibido)
      console.log('Se edito correctamente')
    })
  }

}
