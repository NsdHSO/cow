import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {
  RouterModule,
  Routes,
} from "@angular/router";
import {CowMeatComponent} from "./cow-meat.component";
import {CowMeatResolver} from "./util/service/cow-meat.resolver";

const routes : Routes = [
  {
    path: "",
    component: CowMeatComponent,
    resolve: {allData: CowMeatResolver},
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
export class CowRoutingModule {}
