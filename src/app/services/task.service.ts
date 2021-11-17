import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from '../interfaces/response/response'

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private myApi: string = 'https://localhost:44378';
  private myMethodTask: string = '/api/getmethods/Task';
  private myMethodTaskSpecific: string = '/api/getmethods/Task/specific/'

  constructor(private _http: HttpClient) { }

  getTask(): Observable<Response>{
    return this._http.get<Response>(this.myApi + this.myMethodTask);
  }

  getTaskSpecific(id: number): Observable<Response>{
    return this._http.get<Response>(this.myApi + this.myMethodTaskSpecific + id);
  }
}
