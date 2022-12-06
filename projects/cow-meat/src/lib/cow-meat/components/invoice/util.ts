import {AbstractControl} from '@angular/forms';
import {Invoice} from './invoice';

export function HourValidator(control : AbstractControl) {
  return (Number.isInteger(control.value)
    ? null
    : {hours: true});
}

interface CustomerType extends Invoice {
  userId : number;
  customerId : number;
}

export interface InvoiceType extends CustomerType {}

export interface Customer {
  firstName : string;
  lastName : string;
  address : string;
}

export function IsNotEmpty(control : AbstractControl) {
  return control.value && control.value !== 0
    ? null
    : {hours: true};
}

