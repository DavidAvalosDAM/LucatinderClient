import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../model/usuario';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class MisDatosServiceService {

  private urlUsuario = 'http://localhost:8080/restMisDatos';
  constructor(private http:HttpClient) { }
  public getMisdatos(usuario:Usuario){
    return this.http.get<Usuario> (this.urlUsuario + "/"+usuario.idUsuario);
  }
}
