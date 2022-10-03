import {HttpClient} from "@angular/common/http";
import {Inject, Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {IMilkCow} from "../interface/i-milk-cow";

@Injectable({
              providedIn: "root",
            })
export class ReportingService {
  constructor(private readonly _httpClient : HttpClient, @Inject("env") private environment : any) { }

  public getDataForReporting(item: number, page: number) : Observable<IMilkCow> {
    return this._httpClient.get<IMilkCow>(`${this.environment.api}/cow/milk/${item}/${page}`);
  }
  public getCsv(items : number, page : number) {
    this._httpClient.get<IMilkCow>(`${this.environment.api}/cow/milk/${items}/${page}/download`);
  }
}
