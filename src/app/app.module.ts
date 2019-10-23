import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaInicialComponent } from './components/lista-inicial/lista-inicial.component';
import { AltaUsuarioComponent } from './components/alta-usuario/alta-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaInicialComponent,
    AltaUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
