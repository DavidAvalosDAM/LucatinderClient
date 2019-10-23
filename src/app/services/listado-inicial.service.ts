import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../model/usuario';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class ListadoInicialService {

  constructor(private http:HttpClient) { }

  private urlUsuario = 'http://localhost:8080/restListadoInicial';
  public getListadoInicial() {
    return this.http.get<Usuario[]>(this.urlUsuario);
  }

  
}
