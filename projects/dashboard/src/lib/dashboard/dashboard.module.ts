import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {RouterLink} from '@angular/router';
import {CardComponent} from "./components/card/card.component";
import {DashboardRoutingModule} from "./dashboard-routing.module";
import {DashboardComponent} from "./dashboard.component";

@NgModule({
  declarations: [DashboardComponent, CardComponent],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        MatIconModule,
        MatButtonModule,
        FlexLayoutModule,
        RouterLink
    ]
})
export class DashboardModule {}
