import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioServiceService } from 'src/app/services/usuario-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alta-usuario',
  templateUrl: './alta-usuario.component.html',
  styleUrls: ['./alta-usuario.component.css']
})
export class AltaUsuarioComponent implements OnInit {

  usuario: Usuario = new Usuario();

  constructor(private router: Router, private userService: UsuarioServiceService) { }

  altaUsuario(): void {
    this.userService.altaUsuario(this.usuario)
        .subscribe( data => {
          alert("Usuario generado de forma correcta.");
        });
  };

  ngOnInit() {
  }

}
