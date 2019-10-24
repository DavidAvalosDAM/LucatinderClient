import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/usuario';
import { Router } from '@angular/router';
import {MisDatosServiceService} from '../../services/mis-datos-service.service';

@Component({
  selector: 'app-mis-datos',
  templateUrl: './mis-datos.component.html',
  styleUrls: ['./mis-datos.component.css']
})
export class MisDatosComponent implements OnInit {

   usuario: Usuario;

  constructor(private router: Router, private misDatosService: MisDatosServiceService) { 
    this.usuario = new Usuario();
  }
    misDatos():void {
    this.misDatosService.getMisdatos(this.usuario)
      .subscribe( data => {
        alert("Usuario generado de forma correcta.");
      });
}; 
    
  ngOnInit() {
  }

}
