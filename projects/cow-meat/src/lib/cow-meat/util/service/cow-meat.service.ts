import {HttpClient} from '@angular/common/http';
import {
  Inject,
  Injectable
} from '@angular/core';
import {Params} from '@angular/router';
import {
  catchError,
  Observable,
  Subject,
  tap,
  throwError
} from 'rxjs';
import {ICow} from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class CowMeatService {
  private _sideNavSubject : Subject<{ path : string, queryParam : Params }> = new Subject<{ path : string, queryParam : Params }>();
  sidenavData$ = this._sideNavSubject.asObservable();
  private _closeSidenav : Subject<boolean> = new Subject<boolean>();
  closeSide$ = this._closeSidenav.asObservable();
  private _dataCow :Subject<ICow[]> = new Subject()
  cowData$ = this._dataCow.asObservable();
  constructor(
    private readonly _httpClient : HttpClient, @Inject('env') private environment : any
  ) {
  }

  sidenavNextValue(value : { path : string, queryParam : Params }) {
    this._sideNavSubject.next(value);
  }

  sendDateCloseSidenav(value : boolean) {
    this._closeSidenav.next(value);
  }

  public getCow() : Observable<ICow[]> {
    return this._httpClient.get<ICow[]>(`${this.environment.api}/cow/meat`)
      .pipe(
        tap(value => this._dataCow.next(value) ),
        catchError((err) => throwError(new Error(`BE  ${err}`)))
      );
  }

  public getCowById(cowId : number) {
    return this._httpClient.get<ICow>(`${this.environment.api}/cow/meat/${cowId}`)
      .pipe(
        catchError((err) => throwError(new Error(`BE  ${err}`)))
      );
  }
}
