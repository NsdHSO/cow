import {NgModule} from "@angular/core";
import {CoreReportingModule} from "../../../projects/reports/src/lib/reporting/core-reporting.module";

@NgModule({
            declarations: [],
            imports     : [
              CoreReportingModule.forRoot(),
            ],
          })
export class NgxCowReportingModule {}
