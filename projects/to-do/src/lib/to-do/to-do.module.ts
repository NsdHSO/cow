import {DragDropModule} from "@angular/cdk/drag-drop";
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatIconModule} from "@angular/material/icon";
import {CardTodoComponent} from "./components/card-todo/card-todo.component";
import {ToDoRoutingModule} from "./to-do-routing.module";
import {ToDoComponent} from "./to-do.component";

@NgModule({
            declarations: [
              ToDoComponent,
              CardTodoComponent,
            ],
            imports: [
              CommonModule,
              ToDoRoutingModule,
              MatCardModule,
              MatButtonModule,
              MatCheckboxModule,
              FormsModule,
              MatIconModule,
              DragDropModule,
            ],
          })
export class ToDoModule {}
