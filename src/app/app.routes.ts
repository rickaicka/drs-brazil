import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '**',
    title: 'DRS Brazil',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
  }
];
