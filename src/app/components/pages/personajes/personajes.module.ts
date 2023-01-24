import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonajeComponent } from './personaje/personaje.component';
import { ListadoComponent } from './listado/listado.component';


const misComponents = [PersonajeComponent, ListadoComponent];

@NgModule({
  declarations: [...misComponents],
  imports: [CommonModule, RouterModule, InfiniteScrollModule ],
  exports: [...misComponents],
})
export class PersonajesModule {}
