import {HttpClient} from '@angular/common/http';
import {
  Inject,
  Injectable
} from '@angular/core';
import {
  catchError,
  Observable,
  throwError
} from 'rxjs';
import {
  Customer,
  InvoiceType
} from './util';

@Injectable({
  providedIn: 'root'
})
export class InvoiceApiService {
  constructor(
    private _httpClient : HttpClient,
    @Inject('env') private environment : any
  ) { }

  public addInvoice(invoice : InvoiceType) : Observable<InvoiceType> {
    return this._httpClient.post<InvoiceType>(`${this.environment.apiProducts}/invoice`, invoice)
      .pipe(
        catchError((err) => throwError(new Error(`BE  ${err}`)))
      );
  }

  public getCustomers() : Observable<Customer[]> {
    return this._httpClient.get<Customer[]>(`${this.environment.apiProducts}/customer`)
      .pipe(
        catchError((err) => throwError(new Error(`BE  ${err}`)))
      );
  }
}
