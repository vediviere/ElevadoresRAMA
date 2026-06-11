import { Routes } from '@angular/router';
import { authGuard } from './Core/Guards/auth.guard';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./Features/Auth/Login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'layout',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./Features/shared/components/layout/layout.component').then(m => m.LayoutComponent),
    children: [
       {
        path: 'dashboard',
        loadComponent: () =>
          import('./Features/business/dashboard/dashboard.component')
            .then(m => m.DashboardComponent)
      },
      {
        path: 'estimado',
        loadComponent: () =>
          import('./Features/business/estimado/estimado.component')
            .then(m => m.EstimadoComponent)
      },
       {
        path: 'contrato',
        loadComponent: () =>
          import('./Features/business/contrato/contrato.component')
            .then(m => m.ContratoComponent)
      },
      {
        path: 'carta-aceptacion',
        loadComponent: () =>
          import('./Features/business/carta-aceptacion/carta-aceptacion.component')
            .then(m => m.CartaAceptacionComponent)
      },
      {
        path: 'matriz',
        loadComponent: () =>
          import('./Features/business/matriz/matriz.component')
            .then(m => m.MatrizComponent)
      },
      {
        path: 'materiales',
        loadComponent: () =>
          import('./Features/business/materiales/materiales.component')
            .then(m => m.MaterialesComponent)
      },
    ]   
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];