import {Injectable} from "@angular/core";
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from "@angular/router";
import {ReportingService} from "./reporting.service";

@Injectable({
  providedIn: "root",
})
export class GetReportingDataResolver implements Resolve<void> {
  public constructor(private readonly _reportingService : ReportingService) {
  }

  resolve(route : ActivatedRouteSnapshot, state : RouterStateSnapshot) : void {
    return this._reportingService.getDataForReporting(10, 0);
  }
}
