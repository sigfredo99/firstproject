import { Component, Input, Output, EventEmitter, Host } from '@angular/core';
import { AppComponent } from '../app/app.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})
export class UserComponent {

  @Input('data') user: any

  //@Output() borrar = new EventEmitter<number>()

  constructor(
    @Host() private _app: AppComponent
  ) {
    
   }

  BorrarUsuario(id: number){
    this._app.usuarios=this._app.usuarios.filter(usuario => usuario.id != id)
   //this.borrar.emit(id)
  }

}
