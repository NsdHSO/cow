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
  throwError
} from 'rxjs';
import {ICow} from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class CowMeatService {
  private _sideNavSubject : Subject<{ path : string, queryParam : Params }> = new Subject<{ path : string, queryParam : Params }>();
  sidenavData$ = this._sideNavSubject.asObservable();

  constructor(
    private readonly _httpClient : HttpClient, @Inject('env') private environment : any
  ) {
  }

  sidenavNextValue(value : { path : string, queryParam : Params }) {
    this._sideNavSubject.next(value);
  }

  public getCow() : Observable<ICow> {
    return this._httpClient.get<ICow>(`${this.environment.api}/cow/meat`)
      .pipe(
        catchError((err) => throwError(new Error(`BE  ${err}`)))
      );
  }
}
