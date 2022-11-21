import {
  animate,
  style,
  transition,
  trigger
} from '@angular/animations';
import {
  Component,
  ElementRef,
  Input
} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {
  Product,
  ProductImage
} from '../../product.model';
import {ProductsService} from '../../products.service';
import {EditComponent} from '../edit/edit.component';

@Component({
  selector: 'lib-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  animations: [
    trigger('move', [
      transition(':enter', [
        style({transform: 'translateX(50%)'}),
        animate(
          200, style({
            transform: 'translateX(0)',
            animationTimingFunction: 'cubic-bezier(0.35, 0, 0.25, 0.5)'
          }))
      ]),
      transition(':leave', [
        style({transform: 'translateX(0)'}),
        animate(
          200, style({
            transform: 'translateX(-50%)',
            animationTimingFunction: 'cubic-bezier(0.35, 0, 0.25, 0.5)'
          }))
      ])
    ])
  ]
})
export class PostComponent {
  @Input() product = {} as Product;
  index : number = 0;

  constructor(
    public matDialog : MatDialog,
    private readonly _productService : ProductsService
  ) {}

  public triggerArrow($event : { index : number }) : void {
    this.index = $event.index;
  }

  openDialog(data : Product, event : any) : void {
    const target = new ElementRef(event.currentTarget);
    data.images = [{fileName: '' }]as ProductImage []
    const refDialog = this.matDialog.open(EditComponent, {
      width: '250px',
      data: {
        data,
        trigger: target
      }
    });
    refDialog.afterClosed()
      .subscribe(r => {
        this._productService.updateProduct(this.product, this.product.id);
      });
  }

  public toggleHeart() : void {
    this.product.love = !this.product.love;
    this._productService.updateProduct(this.product, this.product.id);
  }
}
