import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  RouterModule,
  Routes
} from '@angular/router';
import * as path from 'path';
import {EditComponent} from './edit.component';

const routes: Routes =[
  {
    path:'',
    component: EditComponent
  }
]

@NgModule({
  declarations: [EditComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
})
export class EditModule { }
