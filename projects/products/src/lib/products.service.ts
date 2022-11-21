import {
  HttpClient,
  HttpErrorResponse
} from '@angular/common/http';
import {
  Inject,
  Injectable
} from '@angular/core';
import {
  catchError,
  merge,
  Observable,
  scan,
  share,
  Subject,
  throwError
} from 'rxjs';
import {Product} from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products$ = this._httpClient.get<Product[]>(`${this._environment.apiProducts}/product`)
    .pipe(
      catchError(this.handleError),
      share()
    );
  private newProduct : Subject<Product> = new Subject<Product>();
  newProduct$ = this.newProduct.asObservable();
  // @ts-ignore
  productWithAdd$ = merge(this.products$, this.newProduct$
  )
    .pipe(
      scan((acc, value) => (value instanceof Array)
        ? [...value]
        : [...acc, value], [] as Product[])
    );

  constructor(
    @Inject(
      'env') private _environment : any,
    private _httpClient : HttpClient
  ) { }

  addNewProduct(product : Product) {
    this.newProduct.next(product);
  }

  updateProduct(updatePayload : any, productId : number) {
    this._httpClient.patch<Product>(
      `${this._environment.apiProducts}/product/${productId}`, updatePayload)
      .pipe(
        catchError(this.handleError)
      )
      .subscribe();
  }

  private handleError(err : HttpErrorResponse) : Observable<never> {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage : string;
    if(err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    }
    else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.message}`;
    }
    console.error(err);
    return throwError(() => errorMessage);
  }
}
