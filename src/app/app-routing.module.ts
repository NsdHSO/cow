import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

const routes : Routes = [
  {
    path        : "",
    loadChildren: () => import("./@core/toDo.module").then(
      m => m.NgxToDoModule),
  }
  , {
    path        : "",
    loadChildren: () => import("./@core/cow-reporting-module").then(
      m => m.NgxCowReportingModule),
  }, {
    path        : "",
    loadChildren: () => import("./@core/cow-module").then(
      m => m.NgxCowModule),
  },
];

@NgModule({
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule],
          })
export class AppRoutingModule {}
