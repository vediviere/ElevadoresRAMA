import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        loadComponent: () => import('./shared/components/layout/layout.component'),
        children: [
            {
                path: 'dashboard',
                loadComponent: () => import ('./business/dashboard/dashboard.component')
            },
            {
                path: 'estimado',
                loadComponent: () => import ('./business/estimado/estimado.component')
            },
            {
                path: 'contrato',
                loadComponent: () => import ('./business/contrato/contrato.component')
            },
            {
                path: 'carta-aceptacion',
                loadComponent: () => import ('./business/carta-aceptacion/carta-aceptacion.component')
            },
            {
                path: 'matriz',
                loadComponent: () => import ('./business/matriz/matriz.component')
            },
            {
                path: 'materiales',
                loadComponent: () => import ('./business/materiales/materiales.component')
            },
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'dashboard'
    }
];
