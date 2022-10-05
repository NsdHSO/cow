import {HttpClient} from "@angular/common/http";
import {Inject, Injectable} from "@angular/core";
import {Subject} from "rxjs";
import {IToDo} from "./IToDo";

@Injectable({
              providedIn: "root",
            })
export class ToDoService {
  public allTodos : Subject<IToDo[]> = new Subject<IToDo[]>();
  private _description               = "";
  public get description() : string {
    return this._description;
  }

  public set description(value : string) {
    this._description = value;
  }

  public constructor(private readonly _httpClient : HttpClient, @Inject("env") private environment : any) { }

  public getAllDate() {
    this._httpClient.get<IToDo[]>(`${this.environment.api}/to-do`)
      .subscribe((todos : IToDo[]) => this.allTodos.next(todos));
  }

  public makeAction(data : any) {
    let updateKeyObject     = Object.keys(data)[0];
    let updateValueObject   = Object.values(data)[0];
    let a                   = {};
    // @ts-ignore
    a[`${updateKeyObject}`] = updateValueObject;
    this._httpClient.patch(`${this.environment.api}/to-do/${data.id}`, a)
      .subscribe();
  }

  public makeDeletion(data : any) {
    let updateKeyObject     = Object.keys(data)[0];
    let updateValueObject   = Object.values(data)[0];
    let a                   = {};
    // @ts-ignore
    a[`${updateKeyObject}`] = updateValueObject;
    this._httpClient.delete(`${this.environment.api}/to-do/${data.id}`)
      .subscribe(() => {
        this.getAllDate();
      });
  }

  public addNewPost() {
    this._httpClient.post(`${this.environment.api}/to-do`, {description: this.description})
      .subscribe(() => {
        this.getAllDate();
      });
  }
}
