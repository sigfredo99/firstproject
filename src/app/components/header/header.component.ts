import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent {
  collapsed = true;
  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }
/*el constructor es la funcion que se 
ejecuta cuando el componente se esta creando*/
  constructor() {
   }
/*el metodo ngOnInit es lo que se ejecuta cuando
el componente fue creado correctamente, si no se creo bien
no se ejecutara este metodo*/
  ngOnInit(): void {
  }
}
