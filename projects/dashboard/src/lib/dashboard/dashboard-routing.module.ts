import {NgModule} from "@angular/core";
import {
  RouterModule,
  Routes,
} from "@angular/router";
import {DashboardComponent} from "./dashboard.component";
import {DashboardResolver} from "./util";

const routes : Routes = [
  {
    path: "",
    component: DashboardComponent,
    resolve: {data: DashboardResolver},
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
})
export class DashboardRoutingModule {}
