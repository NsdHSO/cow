import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {
  RouterModule,
  Routes,
} from "@angular/router";
import {ReportingComponent} from "./reporting.component";
import {GetReportingDataResolver} from "./utils/service/get-reporting-data.resolver";

const routes : Routes = [
  {
    path: "",
    component: ReportingComponent,
    resolve: {
      allData: GetReportingDataResolver,
    },
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class ReportingRoutingModule {}

