import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { DropDownComponent } from './drop-down/drop-down.component';



@NgModule({
            declarations: [
              DropDownComponent,
            ],
              imports: [
                  CommonModule,
                  ReactiveFormsModule,
                  FormsModule,
              ],
            exports     : [
              DropDownComponent,
            ],
          })
export class SharedModule { }
