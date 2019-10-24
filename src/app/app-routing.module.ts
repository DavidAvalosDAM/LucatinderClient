import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AltaUsuarioComponent } from './components/alta-usuario/alta-usuario.component';
import { ListaInicialComponent } from './components/lista-inicial/lista-inicial.component';
import { LoginComponent } from './components/login/login.component';



/*Creamos las rutas de los componentes*/
const routes: Routes = [
  {path: 'altaUsuario', component: AltaUsuarioComponent},
  {path: 'listaInicial', component: ListaInicialComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
