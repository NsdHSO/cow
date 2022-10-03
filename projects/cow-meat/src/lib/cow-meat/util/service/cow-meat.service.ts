import {HttpClient} from "@angular/common/http";
import {Inject, Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {ICow} from "../interfaces";

@Injectable({
              providedIn: "root",
            })
export class CowMeatService {
  constructor(
    private readonly _httpClient : HttpClient, @Inject("env") private environment : any,
  ) {
  }

  public getCow() : Observable<ICow> {
    return this._httpClient.get<ICow>(`${this.environment.api}/cow/meat`);
  }
}
