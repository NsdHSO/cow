import {NgIf} from '@angular/common';
import {
  AfterViewInit,
  Component,
  inject,
  OnDestroy
} from '@angular/core';
import {ChartOptions} from 'chart.js';
import {NgChartsModule} from 'ng2-charts';
import {
  Subject,
  takeUntil,
  tap
} from 'rxjs';
import {ProfitabilityClockService} from './util';

@Component({
  selector: 'cow-profitability',
  templateUrl: './profitability-clock.component.html',
  styleUrls: ['./profitability-clock.component.scss'],
  imports: [
    NgChartsModule,
    NgIf
  ],
  standalone: true
})
export class ProfitabilityClockComponent implements AfterViewInit, OnDestroy {
  // Pie
  public pieChartOptions : ChartOptions<'pie'> = {
    responsive: false
  };
  public pieChartLabels = [
    'Inseminated', 'Early',
    'Pregnant',
    'Calf'
  ];
  public pieChartDatasets = [
    {data: [1, 1, 1, 1]}
  ];
  public flag = false;
  public pieChartLegend = true;
  public pieChartPlugins = [];
  private _destroyed$ : Subject<any> = new Subject<any>();
  private _profitabilityService = inject(
    ProfitabilityClockService);

  public ngAfterViewInit() {
    this._profitabilityService.statistics$.pipe(
      tap(t => {
        this.flag = false;
      }),
      takeUntil(this._destroyed$)
    )
      .subscribe(
        (data : number[]) => {
          this.pieChartDatasets[0].data = [];
          this.pieChartDatasets[0].data = data;
          this.flag = true;
        }
      );
  }

  public ngOnDestroy() : void {
    this._destroyed$.next({});
    this._destroyed$.complete();
  }
}
