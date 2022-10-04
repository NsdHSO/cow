import {Component, Input} from "@angular/core";

@Component({
             selector   : "lib-card-todo",
             templateUrl: "./card-todo.component.html",
             styleUrls  : ["./card-todo.component.scss"],
           })
export class CardTodoComponent {
  @Input()
  public isNew   = false;
  @Input()
  public ranting = false
  @Input()
  public checked = false;
  @Input()
  public description = "asdasdasd";
}
