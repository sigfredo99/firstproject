import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { LoginResponse, ListarTipoUsuarioResponse, GuardarTipoUsuarioResponse } from '../shared/interfaces';
import { HttpClient, HttpErrorResponse} from'@angular/common/http';
import {HttpParams} from  "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private _http: HttpClient
  ) { }

  api_url: string='http://localhost:8000'

  login(correo: string, password: string): Observable<LoginResponse>{
    /*NOTA: si se quiere encyptar un dato en Angular solo basta 
    con llamar a la funcion btoa, y pasarle el dato que queremos encryptar
    es decir por ejemplo si queremos pasar la clave encriptada lo realizariamos
    de la siguiente manera: password= btoa(password), de esta manera nuestra variable
    password quedaria encriptada
    */
   //password = btoa(password)
    return this._http.post<LoginResponse>(`${this.api_url}/api/auth/login`,{
      correo: correo,
      password: password
    })

  }

  listartipousuarios(token: string): Observable<ListarTipoUsuarioResponse>{
    const params = new HttpParams().set('token', token);
    return this._http.get<ListarTipoUsuarioResponse>(`${this.api_url}/api/tipousuarios/listar`, {params})
  }

  guardartipousuarios(token: string): Observable<GuardarTipoUsuarioResponse>{
    const params = new HttpParams().set('token', token);
    return this._http.get<GuardarTipoUsuarioResponse>(`${this.api_url}/api/tipousuarios/nuevo`, {params})
  }

 
}
