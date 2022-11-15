import {
  Component,
  OnInit,
  ViewChild
} from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from './product.model';
import {ProductsService} from './products.service';

@Component({
  selector: 'lib-products',
  templateUrl: 'product.component.html',
  styleUrls:['product.component.scss']
})
export class ProductsComponent implements OnInit {
  products$ : Observable<Product[]> | undefined;

  constructor(private _product : ProductsService) { }

  ngOnInit() : void {
    this.products$ = this._product.products$;
  }
}
