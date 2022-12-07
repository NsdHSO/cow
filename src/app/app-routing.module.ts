import {NgModule} from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';
import {DashboardComponent} from '../../projects/cow-meat/src/lib/cow-meat/components/dashboard/dashboard.component';

const routes : Routes = [
  {
    path: 'product',
    loadChildren: () => import('./@core/product.module').then(m => m.NgxProductModule)
  },
  {
    path: 'email',
    loadChildren: () => import('./@core/email.module').then(
      m => m.NgxEmailModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./@core/dashboard.module').then(
      m => m.NgxDashboardModule)
  },
  {
    path: 'to-do',
    loadChildren: () => import('./@core/toDo.module').then(
      m => m.NgxToDoModule)
  }
  , {
    path: 'reporting',
    loadChildren: () => import('./@core/cow-reporting-module').then(
      m => m.NgxCowReportingModule)
  }, {
    path: 'cow',
    loadChildren: () => import('./@core/cow-module').then(
      m => m.NgxCowModule)
  },
  {
    path:'**',
    redirectTo:'cow'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
