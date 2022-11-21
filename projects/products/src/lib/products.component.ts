import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormControl,
  FormGroup
} from '@angular/forms';
import {Observable} from 'rxjs';
import {
  Product,
  ProductImage
} from './product.model';
import {ProductsService} from './products.service';

@Component({
  selector: 'lib-products',
  templateUrl: 'product.component.html',
  styleUrls: ['product.component.scss']
})
export class ProductsComponent implements OnInit {
  products$ : Observable<Product[]> | undefined;
  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null)
  });

  constructor(private productsService : ProductsService) { }

  ngOnInit() : void {
    this.products$ = this.productsService.productWithAdd$;
  }

  public addNewProduct() {
    const newProduct = {
      name: '',
      cost: 0,
      ranting: 0,
      love: false,
      images: [] as ProductImage[],
      id: 0
    } as Product;
    this.productsService.addNewProduct(newProduct);
  }
}
