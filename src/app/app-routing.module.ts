import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/pages/home/home.component';
import { ListadoComponent } from './components/pages/personajes/listado/listado.component';
import { PersonajeComponent } from './components/pages/personajes/personaje/personaje.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'listado',
    component: ListadoComponent,
  },
  {
    path: 'personaje/:id',
    component: PersonajeComponent,
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
