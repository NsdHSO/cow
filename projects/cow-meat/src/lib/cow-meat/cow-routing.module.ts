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
            loadComponent: () => import('./components/tab1/tab1.component').then(
              c => c.Tab1Component)
          },
          {
            path: 'tab2',
            loadComponent: () => import('./components/tab2/tab2.component').then(
              c => c.Tab2Component)
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
