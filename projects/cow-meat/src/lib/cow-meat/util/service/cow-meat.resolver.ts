import {Injectable} from "@angular/core";
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from "@angular/router";
import {Observable} from "rxjs";
import {ICow} from "../interfaces";
import {CowMeatService} from "./cow-meat.service";

@Injectable({
  providedIn: "root",
})
export class CowMeatResolver implements Resolve<ICow> {
  constructor(private readonly _cowMeatService : CowMeatService) {}

  resolve(route : ActivatedRouteSnapshot, state : RouterStateSnapshot) : Observable<ICow> {
    return this._cowMeatService.getCow();
  }
}
