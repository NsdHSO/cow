import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Inject, Injectable} from '@angular/core';
import {LocalStorageService} from "ngx-driver";
import {Observable} from "rxjs";
import {environment} from "../../../../../environments/environment";
import {ICow} from "../interfaces";

@Injectable({
              providedIn: 'root',
            })
export class CowMeatService {
  public header : HttpHeaders = new HttpHeaders;


  constructor(
    private readonly _httpClient : HttpClient, @Inject('env') private environment : any,
    private readonly _localStorage : LocalStorageService,
  ) {
    let tokenFromLocalStorage = _localStorage.geItem('token');
    this.header               = new HttpHeaders().set(
      'Authorization',
      'Bearer ' + tokenFromLocalStorage,
    );
  }

  public getCow() : Observable<ICow> {
    return this._httpClient.get<ICow>(`${environment.api}`, {headers: this.header});
  }
}
