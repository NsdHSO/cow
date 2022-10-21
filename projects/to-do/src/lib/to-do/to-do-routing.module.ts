import {NgModule} from "@angular/core";
import {
  RouterModule,
  Routes,
} from "@angular/router";
import {ToDoComponent} from "./to-do.component";
import {GetAllToDoResolver} from "./util/get-all-to-do.resolver";

const routes : Routes = [
  {
    path: "",
    component: ToDoComponent,
    resolve: {
      data: GetAllToDoResolver,
    },
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
})
export class ToDoRoutingModule {}
