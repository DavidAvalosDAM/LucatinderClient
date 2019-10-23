import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../model/usuario';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UsuarioServiceService {

  constructor(private http:HttpClient) {}

  private urlUsuario = 'http://localhost:8080/restUsuario';

  public altaUsuario(Usuario) {
    return this.http.post<Usuario>(this.urlUsuario, Usuario);
  }



}
