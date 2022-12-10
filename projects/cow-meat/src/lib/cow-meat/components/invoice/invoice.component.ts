import {CommonModule} from '@angular/common';
import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {
  ActivatedRoute,
  Params
} from '@angular/router';
import {
  combineLatest,
  debounce,
  interval,
  map,
  startWith,
  Subject,
  takeUntil,
  tap
} from 'rxjs';
import {InvoiceService} from './invoice.service';
import {
  HourValidator,
  InvoiceType
} from './util';

@Component({
  selector: 'lib-tab2',
  standalone: true,
  imports: [
    CommonModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatSelectModule,
    ReactiveFormsModule, MatSlideToggleModule, MatButtonModule
  ],
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit, AfterViewInit, OnDestroy {
  invoiceForm : FormGroup;
  public customers : any;
  public total : number = 0;
  public invoice : { id : number | null } = {id: null};
  private _destroyed$ : Subject<void> = new Subject<void>();

  constructor(
    private readonly _fb : FormBuilder,
    private _activateRouter : ActivatedRoute,
    private _invoiceService : InvoiceService
  ) {
    this.invoiceForm = this._fb.group({
      id: [''],
      service: ['', Validators.required],
      date: this._fb.group({
        startDate: ['', Validators.required],
        endDate: ['', Validators.required]
      }),
      hours: [0, [Validators.required, HourValidator]],
      rate: [0, Validators.required],
      customer: ['', Validators.required],
      paid: [false]
    });
  }

  ngOnInit() : void {
    this._getInvoiceIdFromParams();
    this._calculateTotalMonney();
    this.customers = this._invoiceService.getCustomers();
  }

  ngAfterViewInit() {
  }

  public save() : void {
    let invoice = {} as InvoiceType;
    invoice.userId = 1;
    invoice.rate = this.invoiceForm.value.rate;
    invoice.hours = this.invoiceForm.value.hours;
    invoice.customerId = this.invoiceForm.value.customer;
    invoice.service = this.invoiceForm.value.service;
    invoice.endDate = this.invoiceForm.value.date.endDate;
    invoice.startDate = this.invoiceForm.value.date.startDate;
    this._invoiceService.addInvoice(invoice);
    this.invoiceForm.reset()
    this.invoiceForm.updateValueAndValidity()
  }

  public invoiceAction(delete1 : string) : void {
    throw  new Error(delete1);
  }

  private _calculateTotalMonney() : void {
    combineLatest([
      this.invoiceForm.get('hours')
        ?.valueChanges
        .pipe(startWith(0)), this.invoiceForm.get('rate')
        ?.valueChanges
        .pipe(startWith(0))
    ])
      .pipe(
        debounce(() => interval(500)),
        tap((hourAndRate : any) => this.total = hourAndRate[0] * hourAndRate[1]))
      .subscribe();
  }

  private _getInvoiceIdFromParams() : void {
    this._activateRouter.params.pipe(
      map((params : Params) => params['invoiceId']),
      takeUntil(this._destroyed$)
    )
      .subscribe((invoiceId) => {
        if(invoiceId) {
          throw new Error('Service For get invoice are not implemented');
        }
        else {
          throw new Error('Service For get invoice are implemented');
        }
      });
  }

  public ngOnDestroy() : void {
    this._destroyed$.next();
    this._destroyed$.complete();
  }
}
