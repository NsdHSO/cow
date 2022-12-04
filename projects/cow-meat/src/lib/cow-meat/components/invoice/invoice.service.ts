import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Invoice} from './invoice';
import {InvoiceApiService} from './invoice-api.service';
import {
  Customer,
  InvoiceType
} from './util';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  constructor(private _invoiceApiService: InvoiceApiService) { }

  public addInvoice(invoice: InvoiceType){
     return this._invoiceApiService.addInvoice(invoice).subscribe()
  }

  public getCustomers(): Observable<Customer[]>{
    return this._invoiceApiService.getCustomers();
  }
}
