import { Component, OnInit } from '@angular/core';
import { Subject, BehaviorSubject, ReplaySubject, AsyncSubject } from 'rxjs';
import { LogService } from '@services/log.service';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.sass']
})
export class SubjectsComponent implements OnInit {

  constructor(private _log:LogService) {
    this.numeroSubject.subscribe(numero=>this.numero = numero)
    this.numeroBSubject.subscribe(numero=>{
      if(numero == null){
        this._log.log('Behavior Subject', numero)
      }else{
        this.numeroB = numero
      }
    })
    this.numeroRSubject.subscribe(numero=>this.numeroR = numero)
    this.numeroASubject.subscribe(numero=>this.numeroA = numero)
   }

  ngOnInit(): void {
  }

  public numeroSubject: Subject<number> = new Subject<number>()
  /*para el behavior subject debemos pasarle un valor inicial el cual sera 
  en el caso no le demos un next a este y al llamar al ultimoi valor
  guardado en caché no de error o no este definido*/
  public numeroBSubject: BehaviorSubject<number> = new BehaviorSubject(null)
  /*Para el replay subject deberemos pasarle la cantidad de datos que queremos
  que guarde en el caché ya que a diferencia del behavior este puede guardar
  mas de un dato*/
  public numeroRSubject: ReplaySubject<number> = new ReplaySubject(3)
  public numeroASubject: AsyncSubject<number> = new AsyncSubject<number>()


  numero: number
  numeroB: number
  numeroR: number
  numeroA: number

  siguiente(tipo: string) : void
  {
    //Siguiente número aleatorio
    const valor = Math.floor((Math.random() * 100) + 1)
    switch(tipo){
      case 'N':{
        this._log.log('Subject', valor)
        this.numeroSubject.next(valor)
        break;
      }
      case 'B':{
        this._log.log('Behavior Subject', valor)
        this.numeroBSubject.next(valor)
        /*Para obtener el ultimo dato que hayamos pasado deberiamos realizar:
        this.numeroBSubject.getValue()
        De esta manera obtendriamos el ultimo valor que le hayamos pasado*/
        break;
      }
      case 'R':{
        this._log.log('Replay Subject', valor)
        this.numeroRSubject.next(valor)
        break;
      }
      case 'A':{
        this._log.log('Async Subject', valor)
        this.numeroASubject.next(valor)
        break;
      }
    }


  }

  completar(tipo:string) : void
  {
    switch(tipo){
      case 'S':{
        this._log.complete('Subject')
        this.numeroSubject.complete()
        break;
      }
      case 'B':{
        this._log.complete('Behavior Subject')
        this.numeroBSubject.complete()
        /*Imprime el ultimo valor obtenido guardado en caché*/
        console.log('Ultimo valor obtenido: '+ this.numeroBSubject.getValue())
        break;
      }
      case 'R':{
        this._log.complete('Replay Subject')
        console.log('Ultimos valores obtenido: ')
        /*Obtiene la ultima cantidad de valores obtenidos definidos por nosotros*/
        this.numeroRSubject.forEach((...data) => {console.log(...data);})
        this.numeroRSubject.complete()
        break;
      }
      case 'A':{
        this._log.complete('Async Subject')
        /*El Async no mostrará los datos hasta que el metodo complete
        sea ejecutado*/
        this.numeroASubject.complete()
        break;
      }
    }

  }

}
