import {
  Component,
  OnInit,
  ViewChild
} from '@angular/core';
import {
  FormControl,
  FormGroup
} from '@angular/forms';
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
  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });
  constructor(private _product : ProductsService) { }

  ngOnInit() : void {
    this.products$ = this._product.products$;
  }
}
