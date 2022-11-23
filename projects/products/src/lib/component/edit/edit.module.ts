import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material/dialog';
import {
  RouterModule,
  Routes
} from '@angular/router';
import {ExtractValuePipe} from '../../utils/extract-value.pipe';
import {UtilsModule} from '../../utils/utils.module';
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
    FormsModule,
    MatCheckboxModule,
    UtilsModule
  ],
})
export class EditModule {}
