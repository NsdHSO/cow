import {Component, OnInit} from "@angular/core";
import {IToDo} from "./util/IToDo";
import {ToDoService} from "./util/to-do.service";

@Component({
             selector   : "lib-to-do",
             templateUrl: "./to-do.component.html",
             styleUrls  : ["./to-do.component.scss"],
           })
export class ToDoComponent implements OnInit {
  todos = [] as IToDo[];

  constructor(private readonly _toDoService : ToDoService) { }

  ngOnInit() : void {
    this._toDoService.allTodos.subscribe(todos => this.todos = todos);
  }
}
