import {NgModule} from '@angular/core';
import {ExtractValuePipe} from './extract-value.pipe';

@NgModule({
  declarations: [ExtractValuePipe],
  exports: [ExtractValuePipe]
})
export class UtilsModule {
}
