import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

const routes : Routes = [
  {
    path        : "",
    loadChildren: () => import("./@core/email.module").then(
      m => m.NgxEmailModule),
  },
  {
    path        : "dashboard",
    loadChildren: () => import("./@core/dashboard.module").then(
      m => m.NgxDashboardModule),
  },
  {
    path        : "to-do",
    loadChildren: () => import("./@core/toDo.module").then(
      m => m.NgxToDoModule),
  }
  , {
    path        : "reporting",
    loadChildren: () => import("./@core/cow-reporting-module").then(
      m => m.NgxCowReportingModule),
  }, {
    path        : "cow-meat",
    loadChildren: () => import("./@core/cow-module").then(
      m => m.NgxCowModule),
  },
];

@NgModule({
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule],
          })
export class AppRoutingModule {}
