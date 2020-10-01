import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{
  usuarios = []

  constructor(
    private _http: HttpClient
  ){ }

  ngOnInit(){
    this._http.get('https://jsonplaceholder.typicode.com/users')
    .subscribe((datos: any[]) => this.usuarios = datos)
  }


  /*borrarUsuario(id: number){
    this.usuarios= this.usuarios.filter(usuario => usuario.id != id)
  }*/
}
