import { Injectable } from '@angular/core';
import { HttpClient } from'@angular/common/http';
import { Observable } from 'rxjs';
import { UsersResponse } from '../shared/interfaces';


@Injectable({
  providedIn: 'root'
})
export class PaginationService {

  constructor(
    private _http: HttpClient
  ) { }

  api_url: string='https://jsonplaceholder.typicode.com'

  getUsers(): Observable<UsersResponse[]>{
    return this._http.get<UsersResponse[]>(`${this.api_url}/todos`)
  }

}
