import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {
  RouterModule,
  Routes
} from '@angular/router';
import {ProductsModule} from '../../products.module';
import {EditComponent} from './edit.component';

const routes : Routes = [
  {
    path: '',
    component: EditComponent
  }
];

@NgModule({
  declarations: [EditComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    ProductsModule,
    FormsModule,
    MatCheckboxModule
  ]
})
export class EditModule {}
