import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatNativeDateModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {
  MAT_DIALOG_DEFAULT_OPTIONS,
  MatDialogModule
} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {RouterOutlet} from '@angular/router';
import {CarouselComponent} from './component/carousel/carousel.component';
import {EditModule} from './component/edit/edit.module';
import {JumbotronComponent} from './component/jumbotron/jumbotron.component';
import {PostComponent} from './component/post/post.component';
import {RantingComponent} from './component/ranting/ranting.component';
import {ProductRoutingModule} from './product-routing.module';
import {ProductsComponent} from './products.component';
import {ExtractValuePipe} from './utils/extract-value.pipe';
import {UtilsModule} from './utils/utils.module';

@NgModule({
  declarations: [
    CarouselComponent,
    JumbotronComponent,
    RantingComponent,
    PostComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    UtilsModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatDialogModule,
    ProductRoutingModule,
    RouterOutlet
  ],
  exports: [
    ProductsComponent,
    ExtractValuePipe
  ],
  providers: [
    MatDatepickerModule,
  ]
})
export class ProductsModule {}
