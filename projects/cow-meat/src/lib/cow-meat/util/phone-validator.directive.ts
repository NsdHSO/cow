import { Directive } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  Validator,
  ValidatorFn
} from '@angular/forms';

@Directive({
  selector: '[libPhoneValidator][ngModel]',
  standalone: true,
  providers: [
    {provide: NG_VALIDATORS, useExisting: PhoneValidatorDirective, multi: true}
  ]
})
export class PhoneValidatorDirective implements Validator{
  private validator = PhoneValidator();
  constructor() { }

  public validate(control : AbstractControl) : any{
    return this.validator(control);
  }

}

const expression = /\d{10}/;

export function PhoneValidator():ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null=>{
    const valid = expression.test(control.value) && control.value.length <= 10;
    console.log(valid)
    return valid? null: {phone: true};
  }
}
