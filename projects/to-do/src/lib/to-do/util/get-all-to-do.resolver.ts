import {Injectable} from "@angular/core";
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from "@angular/router";
import {
  Observable,
  of,
} from "rxjs";
import {ToDoService} from "./to-do.service";

@Injectable({
  providedIn: "root",
})
export class GetAllToDoResolver implements Resolve<boolean> {
  constructor(private readonly _todoService : ToDoService) {}

  resolve(route : ActivatedRouteSnapshot, state : RouterStateSnapshot) : Observable<boolean> {
    this._todoService.getAllDate();
    return of(true);
  }
}
