import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaInicialComponent } from './components/lista-inicial/lista-inicial.component';
import { AltaUsuarioComponent } from './components/alta-usuario/alta-usuario.component';
import { FormsModule } from '@angular/forms';
import { MisDatosComponent } from './components/mis-datos/mis-datos.component';



@NgModule({
  declarations: [
    AppComponent,
    ListaInicialComponent,
    AltaUsuarioComponent,
    MisDatosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
