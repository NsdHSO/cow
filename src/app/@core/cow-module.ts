import {NgModule} from '@angular/core';
import { CoreCowModule } from 'dist/cow-meat/public-api';

@NgModule({
            declarations: [],
            imports     : [
              CoreCowModule.forRoot(),
            ],
          })
export class NgxCowModule {}
