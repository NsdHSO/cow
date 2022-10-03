import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {TableMaterialModule} from "ngx-liburg";
import {SpinnerModule} from "ngx-liburg-icon";
import {
  HeaderDropDownDownloadComponent,
} from "./components/header-drop-down-download/header-drop-down-download.component";
import {ReportingRoutingModule} from "./reporting-routing.module";
import {ReportingComponent} from "./reporting.component";

@NgModule({
            declarations: [
              ReportingComponent,
              HeaderDropDownDownloadComponent,
            ],
            imports     : [
              CommonModule,
              ReportingRoutingModule,
              TableMaterialModule,
              MatButtonModule,
              SpinnerModule,
              MatFormFieldModule,
              MatSelectModule,
              FormsModule,
            ],
          })
export class ReportingModule {}
