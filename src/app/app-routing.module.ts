import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AltaUsuarioComponent } from './components/alta-usuario/alta-usuario.component';
import { ListaInicialComponent } from './components/lista-inicial/lista-inicial.component';



/*Creamos las rutas de los componentes*/
const routes: Routes = [
  {path: 'altaUsuario', component: AltaUsuarioComponent},
  {path: 'listaInicial', component: ListaInicialComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
