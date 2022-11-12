import {Injectable} from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot
} from '@angular/router';
import {
  Observable,
  of
} from 'rxjs';
import {ProductsService} from './products.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsResolver implements Resolve<boolean> {
  constructor(private _product : ProductsService) {}

  resolve(route : ActivatedRouteSnapshot, state : RouterStateSnapshot) : Observable<boolean> {

    return of(true);
  }
}
