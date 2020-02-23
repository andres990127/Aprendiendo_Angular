import { Component, OnInit } from '@angular/core';
import { User } from '../Models/User';
import { ArticulosService } from '../services/articulos.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Articulo } from '../Models/articulo';

@Component({
  selector: 'app-agregar-articulo',
  templateUrl: './agregar-articulo.component.html',
  styleUrls: ['./agregar-articulo.component.scss']
})
export class AgregarArticuloComponent implements OnInit {
  usuarios: Array<User> = new Array<User>();
  formularioArticulo: FormGroup;
  articulo: Articulo = new Articulo();
  constructor(private ArticuloInyectado: ArticulosService, private fbGenerador: FormBuilder) { }

  ngOnInit() {

    this.formularioArticulo= this.fbGenerador.group({
      title: ['', Validators.required],
      body: ['', Validators.required],
      userId: ['', Validators.required],
    })

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

}
