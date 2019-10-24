import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/usuario';
import { LoginServiceService} from '../../services/login-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario;

  constructor(private router: Router, private loginService: LoginServiceService) { 
    this.usuario = new Usuario();
  }

  ngOnInit() {
  }


  logIn(username: string, password: string, event: Event) {
      this.usuario.username = username;
      this.usuario.password = password;
      this.loginService.getLogin(this.usuario).subscribe(
        res => {console.log(res);},
        error => {console.error(error);},
        () => this.navigate()
    );

  }

  navigate() {
    this.router.navigateByUrl('/index');
  }





}
