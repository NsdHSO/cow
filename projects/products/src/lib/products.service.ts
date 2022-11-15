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
  Observable,
  share,
  tap,
  throwError
} from 'rxjs';
import {Product} from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products$ = this._httpClient.get<Product[]>(`${this._environment.apiProducts}/product`)
    .pipe(tap(data => console.table(data))
      , catchError(this.handleError),
      share()
    );

  constructor(
    @Inject(
      'env') private _environment : any,
    private _httpClient : HttpClient
  ) { }

  updateProduct(updatePayload : any, productId : number) {
    this._httpClient.patch<Product>(
      `${this._environment.apiProducts}/product/${productId}`, updatePayload)
      .pipe(tap(data => console.table(data))
        , catchError(this.handleError),
        share()
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
