import {NgModule} from '@angular/core';
import {CoreCowModule} from 'projects/cow-meat/src/lib/cow-meat/core-cow.module';

@NgModule({
            declarations: [],
            imports     : [
              CoreCowModule.forRoot(),
            ],
          })
export class NgxCowModule {}
