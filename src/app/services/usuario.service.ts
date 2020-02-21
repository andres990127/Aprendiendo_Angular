import { Injectable } from '@angular/core';
import { Usuario } from '../Models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  usuario: Usuario = new Usuario();
  constructor() { 
    this.usuario.usuarioID = 1;
    this.usuario.nombre = 'Andrés Mauricio';
    this.usuario.apellido = 'Gutiérrez Rojas';
  }
}
