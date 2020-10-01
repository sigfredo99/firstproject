import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor() { }

  log(subject: string, valor){
    console.log(subject+ ' | Siguiente valor: '+valor)
  }

  complete(subject: string){
    console.log(subject+ ' | Completado')
  }
}
