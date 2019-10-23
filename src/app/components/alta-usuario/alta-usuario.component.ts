import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/usuario';
import { altaService } from 'src/app/services/altaService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alta-usuario',
  templateUrl: './alta-usuario.component.html',
  styleUrls: ['./alta-usuario.component.css']
})
export class AltaUsuarioComponent implements OnInit {

  usuario: Usuario = new Usuario();

  constructor(private router: Router, private userService: altaService) { }

  altaUsuario(): void {
    this.userService.altaUsuario(this.usuario)
        .subscribe( data => {
          alert("Usuario generado de forma correcta.");
        });
  };

  ngOnInit() {
  }

}
