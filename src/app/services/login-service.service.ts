import { Injectable } from '@angular/core';
import { Usuario } from '../model/usuario';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  

  constructor(private http:HttpClient) { }

  private urlUsuario = 'http://localhost:8080/restLogin';

  public getLogin(Usuario){
    
    return this.http.post<Usuario>(this.urlUsuario, Usuario);
  }
}
