import {NgModule} from "@angular/core";
import {CoreDashboardModule} from "../../../projects/dashboard/src/lib/dashboard/core-dashboard.module";

@NgModule({
            declarations: [],
            imports     : [
              CoreDashboardModule.forRoot(),
            ],
          })
export class NgxDashboardModule {}
