import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Response} from 'src/app/interfaces/response/response';

@Injectable({
  providedIn: 'root'
})
export class ReadService {

  private myApi: string = 'https://localhost:44378';
  private myMethodModule: string = '/api/getmethods/Module';
  private myMethodOperation: string = '/api/getmethods/OpeationModule';
  private myMethodRol: string = '/api/getmethods/Rol';
//  private myMethodRolOperation: string = '';
  private myMethodUser: string = '/api/getmethods/Users';

  constructor(
    private http: HttpClient
  ) { }

  getModules(): Observable<Response>{
    return this.http.get<Response>(this.myApi + this.myMethodModule);
  }

  getOperation(): Observable<Response>{
    return this.http.get<Response>(this.myApi + this.myMethodOperation);
  }

  getRol(): Observable<Response>{
    return this.http.get<Response>(this.myApi + this.myMethodRol);
  }

  //RolOperation method

  getUser(): Observable<Response>{
    return this.http.get<Response>(this.myApi + this.myMethodUser);
  }
}
