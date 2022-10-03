import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {IMilkCow} from "../interface/i-milk-cow";
import {ReportingService} from "./reporting.service";

@Injectable({
              providedIn: "root",
            })
export class GetReportingDataResolver implements Resolve<IMilkCow> {
  public constructor(private readonly _reportingService : ReportingService) {
  }

  resolve(route : ActivatedRouteSnapshot, state : RouterStateSnapshot) : Observable<IMilkCow> {
    return this._reportingService.getDataForReporting(10, 0);
  }
}
