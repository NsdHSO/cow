import {HttpClient} from '@angular/common/http';
import {
  Inject,
  inject,
  Injectable
} from '@angular/core';
import {
  Subject,
  tap
} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfitabilityClockService {
  statisticData(){
   return this._http.get<number[]>(
      `${this.environment.api}/cow/meat/statistics`)
      .subscribe(data =>  this._statistics.next(data))
  }
  private _statistics : Subject<number[]> = new Subject<number[]>();
  statistics$ = this._statistics.asObservable();

  constructor(@Inject(
    'env') private environment : any,
    private readonly _http: HttpClient
  ) {}

  sendStatistics(value : number[]) {
    this._statistics.next(value);
  }
}
