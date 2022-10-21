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
import {DashboardService} from "./dashboard.service";

@Injectable({
  providedIn: "root",
})
export class DashboardResolver implements Resolve<boolean> {
  constructor(private readonly _dashboardService : DashboardService) {}

  resolve(route : ActivatedRouteSnapshot, state : RouterStateSnapshot) : Observable<boolean> {
    this._dashboardService.getData();
    return of(true);
  }
}
