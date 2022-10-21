import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {NgChartsModule} from "ng2-charts";
import {TableMaterialModule} from "ngx-liburg";
import {
  IconCoreModule,
  SpinnerModule,
} from "ngx-liburg-icon";
import {ProfitabilityClockComponent} from "./components/profitability-clock/profitability-clock.component";
import {CowMeatComponent} from "./cow-meat.component";
import {CowRoutingModule} from "./cow-routing.module";

@NgModule({
  declarations: [
    CowMeatComponent,
    ProfitabilityClockComponent,
  ],
  imports: [
    CowRoutingModule,
    CommonModule,
    SpinnerModule,
    IconCoreModule,
    TableMaterialModule,
    NgChartsModule,
  ],
})
export class CowMeatModule {}
