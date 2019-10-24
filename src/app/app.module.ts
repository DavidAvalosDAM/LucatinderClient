import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaInicialComponent } from './components/lista-inicial/lista-inicial.component';
import { AltaUsuarioComponent } from './components/alta-usuario/alta-usuario.component';
import { FormsModule } from '@angular/forms';
import { MisDatosComponent } from './components/mis-datos/mis-datos.component';
import { LoginComponent } from './components/login/login.component';

import {altaService} from '../app/services/altaService';
import {ContactarService} from '../app/services/contactar.service';
import {ListadoInicialService} from '../app/services/listado-inicial.service';
import {MisDatosServiceService} from '../app/services/mis-datos-service.service';



@NgModule({
  declarations: [
    AppComponent,
    ListaInicialComponent,
    AltaUsuarioComponent,
    MisDatosComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [altaService,
    ContactarService,
    ListadoInicialService,
    MisDatosServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
