import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BibliotecaComponent } from './biblioteca.component';
import { AutoresComponent } from './autores/autores.component';
import { TipoComponent } from './tipo/tipo.component';
import { LibroComponent } from './libro/libro.component';
import { ExistenciaComponent } from './existencia/existencia.component';
import { EditorialComponent } from './editorial/editorial.component';
import { AreasComponent } from './areas/areas.component';


const routes: Routes = [
  {
    path: 'biblioteca',
    component: BibliotecaComponent
  },
  {
    path: 'biblioteca/autores',
    component: AutoresComponent
  },
  {
    path: 'biblioteca/editorial',
    component: EditorialComponent
  },
  {
    path: 'biblioteca/existencia',
    component: ExistenciaComponent
  },
  {
    path: 'biblioteca/libro',
    component: LibroComponent
  },
  {
    path: 'biblioteca/tipo',
    component: TipoComponent
  },
  {
    path: 'biblioteca/areas',
    component: AreasComponent
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BibliotecaRoutingModule { }
