import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {RouterOutlet} from '@angular/router';
import {CarouselComponent} from './component/carousel/carousel.component';
import {JumbotronComponent} from './component/jumbotron/jumbotron.component';
import {PostComponent} from './component/post/post.component';
import {RantingComponent} from './component/ranting/ranting.component';
import {ProductRoutingModule} from './product-routing.module';
import {ProductsComponent} from './products.component';

@NgModule({
  declarations: [
    ProductsComponent,
    JumbotronComponent,
    PostComponent,
    CarouselComponent,
    RantingComponent
  ],
  imports: [
    ProductRoutingModule,
    RouterOutlet,
    CommonModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    ProductsComponent
  ]
})
export class ProductsModule {}
