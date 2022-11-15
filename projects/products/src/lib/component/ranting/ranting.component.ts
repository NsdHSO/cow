import {
  Component,
  Input
} from '@angular/core';
import {Product} from '../../product.model';
import {ProductsService} from '../../products.service';

@Component({
  selector: 'lib-ranting',
  templateUrl: './ranting.component.html',
  styleUrls: ['./ranting.component.scss']
})
export class RantingComponent {
  @Input()
  product : Product | any;
  // @ts-ignore
  cloneProduct : Product | any;

  constructor(private _productService : ProductsService) {}

  ngOnInit() {
    this.cloneProduct = Object.assign({}, this.product);
  }

  updateRanting(updatePayload : {}) {
    this._productService.updateProduct(updatePayload, this.product.id);
  }

  public getColor(index : number) : any {
    if(this.cloneProduct) {
      return index <= this.cloneProduct.ranting - 1
        ? `colored`
        : '';
    }
  }

  public enterMouse(index : number) : void {
    if(this.cloneProduct) {
      this.cloneProduct.ranting = ++index;
    }
  }

  public mouseLeave() : void {
    if(this.cloneProduct) {
      this.cloneProduct = Object.assign({}, this.product);
    }
  }

  public changeRanting(numberOfStar : number) : void {
    console.log(++numberOfStar);
    this.product.ranting = numberOfStar;
    this.updateRanting({
      id: this.product.id,
      ranting: this.product.ranting
    });
  }

  public console(icon : number) : void {
    console.log((icon));
  }
}
