import {HttpClient} from "@angular/common/http";
import {
  Inject,
  Injectable,
  OnDestroy,
} from "@angular/core";
import {
  Subject,
  takeUntil,
} from "rxjs";
import {ICardData} from "../interfaces";

@Injectable({
  providedIn: "root",
})
export class DashboardService implements OnDestroy {
  public dashboardData$ : Subject<ICardData[]>;
  private unsubscribe : Subject<void> = new Subject<void>();

  constructor(private readonly _httpClient : HttpClient, @Inject(
    "env") private _environment : any) {
    this.dashboardData$ = new Subject<ICardData[]>();
  }

  public getData() {
    this._httpClient.get<ICardData[]>(`${this._environment.api}/dashboard`)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((data : ICardData[]) => {
        this.dashboardData$.next(data);
      });
  }

  public ngOnDestroy() : void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
