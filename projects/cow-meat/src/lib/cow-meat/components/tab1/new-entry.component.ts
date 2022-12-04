import {CommonModule} from '@angular/common';
import {
  Component,
  OnInit
} from '@angular/core';
import {
  Form,
  FormsModule
} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {NgxMaskModule} from 'ngx-mask';
import {
  Gender,
  ICow
} from '../../util/interfaces';
import {PhoneValidatorDirective} from '../../util/phone-validator.directive';

@Component({
  selector: 'lib-tab1',
  standalone: true,
  imports: [
    CommonModule, MatInputModule, FormsModule, MatDatepickerModule, NgxMaskModule,
    MatRadioModule, PhoneValidatorDirective, MatButtonModule
  ],
  templateUrl: './new-entry.component.html',
  styleUrls: ['./new-entry.component.scss']
})
export class NewEntryComponent implements OnInit {
  public cow : ICow = {} as ICow;

  constructor() { }

  ngOnInit() : void {
  }

  get GenderCow(){
    return Gender
  }

  public save(form: any) : void {
    console.log(form.value)
    throw new Error('Save is not implemented')

  }

  public cancel() : void {
    throw new Error('Cancel is not implemented')
  }
}
