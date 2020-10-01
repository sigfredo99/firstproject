import { Injectable } from '@angular/core';
import { Usuario } from '../entidad/usuario'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  usuarios: Usuario
}
