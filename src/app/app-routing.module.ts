import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BibliotecaComponent } from './pages/biblioteca/biblioteca.component';


export const routes: Routes=[
{
  path: 'pages',
  component: AppComponent,
  children: [
      {
          path: '',
          loadChildren:'./pages/biblioteca/biblioteca.module#BibliotecaModule'
      }
  ]
}


]
@NgModule({
imports:[ RouterModule.forRoot(routes,{useHash:true})
],
exports:[RouterModule],
providers:[]
}) 
export class AppRoutingModule { }
