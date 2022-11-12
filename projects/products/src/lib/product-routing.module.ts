import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';
import {ProductsComponent} from './products.component';

const routes : Routes = [
  {
    path:'',
    component: ProductsComponent,
    children: [
      {
        path: 'edit',
        loadChildren: () => import('./component/edit/edit.module').then(m => m.EditModule)
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ProductRoutingModule {}
