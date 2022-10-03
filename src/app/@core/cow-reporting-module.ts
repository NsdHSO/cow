import {NgModule} from '@angular/core';
import {CoreCowModule} from 'projects/cow-meat/src/lib/cow-meat/core-cow.module';
import {CoreReportingModule} from "../../../projects/reports/src/lib/reporting/core-reporting.module";

@NgModule({
            declarations: [],
            imports     : [
              CoreReportingModule.forRoot(),
            ],
          })
export class NgxCowReportingModule {}
