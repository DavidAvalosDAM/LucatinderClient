import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/usuario';
import { Router } from '@angular/router';
import { ListadoInicialService } from 'src/app/services/listado-inicial.service';
import { ContactarService } from 'src/app/services/contactar.service';

@Component({
  selector: 'app-lista-inicial',
  templateUrl: './lista-inicial.component.html',
  styleUrls: ['./lista-inicial.component.css']
})
export class ListaInicialComponent implements OnInit {

  public listainicial: Usuario[];

  constructor(private _router: Router, 
    private listadoInicialService:ListadoInicialService, 
    private contactarService:ContactarService) { }

  ngOnInit() {
    this.listadoInicialService.getListadoInicial ()
      .subscribe( data => {
        console.log(data);
        this.listainicial= data;
      });
  };

     public Contactar (usuario){
           this.contactarService
           .getContactar(usuario)
           .subscribe( data => {
              console.log(data);
      });

     }
     public Descartar(){

     }
  }


