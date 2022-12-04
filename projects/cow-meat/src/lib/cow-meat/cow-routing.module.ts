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
        loadComponent: () => import('./components/new-cow/new-cow.component').then(
          c => c.NewCowComponent),
        children: [
          {
            path: 'tab1',
            loadComponent: () => import('./components/tab1/new-entry.component').then(
              c => c.NewEntryComponent)
          },
          {
            path: 'tab2',
            loadComponent: () => import('./components/invoice/invoice.component').then(
              c => c.InvoiceComponent)
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
