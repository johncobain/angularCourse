import { Routes } from '@angular/router';
import { Calculadora } from './calculadora/calculadora';
import { ListaCompras } from './lista-compras/lista-compras';

export const routes: Routes = [
  { path: '', redirectTo: 'calculadora', pathMatch: 'full' },
  { path: 'calculadora', component: Calculadora },
  { path: 'lista-compras', component: ListaCompras },
];
