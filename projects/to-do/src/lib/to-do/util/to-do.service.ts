import {HttpClient} from "@angular/common/http";
import {Inject, Injectable} from "@angular/core";
import {Subject} from "rxjs";
import {IToDo} from "./IToDo";

@Injectable({
              providedIn: "root",
            })
export class ToDoService {
  public allTodos : Subject<IToDo[]> = new Subject<IToDo[]>();

  constructor(private readonly _httpClient : HttpClient, @Inject("env") private environment : any) { }

  getAllDate() {
    this._httpClient.get<IToDo[]>(`${this.environment.api}/to-do`)
      .subscribe((todos : IToDo[]) => this.allTodos.next(todos));
  }
}
