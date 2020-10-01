import { Injectable } from '@angular/core';
import { TipoUsuario } from '../entidad/tipousuario'

@Injectable({
  providedIn: 'root'
})
export class TipousuarioService {

  constructor() {  }

  tipousuarios: TipoUsuario
}
