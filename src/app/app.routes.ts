import { RouterModule, Routes } from '@angular/router';
import { FichasComponent } from './components/fichas/fichas.component';
import { FichaComponent } from './components/fichas/ficha.component';
import { ConsultaComponent } from './components/consultas/consulta.component';
import { BuscadorComponent } from './components/buscador/buscador.component';

const APP_ROUTES: Routes = [
  { path: 'fichas', component: FichasComponent },
  { path: 'ficha/:id', component: FichaComponent },
  { path: 'consulta/:ficha/:id', component: ConsultaComponent },
  { path: 'buscador', component: BuscadorComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'fichas' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
