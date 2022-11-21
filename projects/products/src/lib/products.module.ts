import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatNativeDateModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {
  MAT_DIALOG_DEFAULT_OPTIONS,
  MatDialog,
  MatDialogModule
} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {RouterOutlet} from '@angular/router';
import {CarouselComponent} from './component/carousel/carousel.component';
import {JumbotronComponent} from './component/jumbotron/jumbotron.component';
import {PostComponent} from './component/post/post.component';
import {RantingComponent} from './component/ranting/ranting.component';
import {ProductRoutingModule} from './product-routing.module';
import {ProductsComponent} from './products.component';
import {ExtractValuePipe} from './utils/extract-value.pipe';

@NgModule({
  declarations: [
    ProductsComponent,
    JumbotronComponent,
    PostComponent,
    CarouselComponent,
    RantingComponent,
    ExtractValuePipe
  ],
  imports: [
    ProductRoutingModule,
    RouterOutlet,
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatDialogModule
  ],
  exports: [
    ProductsComponent,
    ExtractValuePipe
  ],
  providers: [
    MatDatepickerModule,
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}}

  ]
})
export class ProductsModule {}
