import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BibliotecaComponent } from './pages/biblioteca/biblioteca.component';
import { AreasComponent } from './pages/biblioteca/areas/areas.component';
import { AutoresComponent } from './pages/biblioteca/autores/autores.component';
import { EditorialComponent } from './pages/biblioteca/editorial/editorial.component';
import { ExistenciaComponent } from './pages/biblioteca/existencia/existencia.component';
import { LibroComponent } from './pages/biblioteca/libro/libro.component';
import { TipoComponent } from './pages/biblioteca/tipo/tipo.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
