import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';
import {CowMeatComponent} from './cow-meat.component';
import {CowMeatResolver} from './util/service/cow-meat.resolver';

const routes : Routes = [
  {
    path: 'meat',
    component: CowMeatComponent,
    children: [
      {
        path: 'prod',
        outlet: 'content',
        resolve: {allData: CowMeatResolver},
        loadComponent: () => import('./components/dashboard/dashboard.component').then(
          m => m.DashboardComponent)
      },
      {
        path: 'new-cow',
        outlet: 'sidenav',
        resolve: {allData: CowMeatResolver},
        data: {
          config: {
            route: [
              {
                name: 'Home',
                path: './'
              },
              {
                name: 'Home2',
                path: 'tab2'
              }
            ]
          }
        },
        loadComponent: () => import('./components/new-cow/new-cow.component').then(
          c => c.NewCowComponent),
        children: [
          {
            path: '',
            loadComponent: () => import('./components/tab1/new-entry.component').then(
              c => c.NewEntryComponent)
          },
          {
            path: 'tab2',
            loadComponent: () => import('./components/invoice/invoice.component').then(
              c => c.InvoiceComponent)
          }
        ]
      },
      {
        path: 'edit-cow',
        outlet: 'sidenav',
        data: {
          config: {
            route: [
              {
                name: 'Edit',
                path: './'
              }
            ]
          }
        },
        loadComponent: () => import('./components/new-cow/new-cow.component').then(
          c => c.NewCowComponent),
        children: [
          {
            path: '',
            loadComponent: () => import('./components/edit/edit.component').then(
              c => c.EditComponent)
          }
        ]
      }
    ]
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/cow/meat/(content:prod)'
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class CowRoutingModule {
}
