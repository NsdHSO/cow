import {CommonModule} from '@angular/common';
import {
  Component,
  OnInit
} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {
  DataSourceMaterialTable,
  IActionMaterialColumn,
  TableMaterialModule
} from 'ngx-liburg';
import {SpinnerService} from 'ngx-liburg-icon';
import {ProfitabilityClockComponent} from 'projects/cow-meat/src/public-api';
import {
  Subject,
  takeUntil
} from 'rxjs';
import {
  ICow,
  StateCattle
} from '../../util/interfaces';
import {DashboardService} from './util/dashboard.service';

@Component({
  selector: 'lib-dashboard',
  standalone: true,
  imports: [CommonModule, TableMaterialModule, ProfitabilityClockComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public dataSourceCow : ICow[] | any;
  private _destroyed$ : Subject<void> = new Subject<void>();

  constructor(
    private readonly _activateRouter : ActivatedRoute,
    private readonly _spinerStateSerice : SpinnerService,
    private readonly _dashboardService : DashboardService
  ) { }

  ngOnInit() : void {
    this.dataSourceCow = this._activateRouter.snapshot.data['allData'].map((cow : ICow) => {
      this._spinerStateSerice.sendValue(true);
      const model = <ICow> cow;
      return {
        actions: this._actionTableListCow(),
        editable: false,
        model: {
          ...model
        }
      } as DataSourceMaterialTable<any>;
    });
  }

  public addedNewCow() : void {
    const newCow = {
      actions: this._newCowAction(),
      editable: true,
      model: this._emptyObjectOfCow()
    };
    this.dataSourceCow = [newCow, ...this.dataSourceCow];
  }

  public ngOnDestroy() : void {
    this._destroyed$.next();
    this._destroyed$.complete();
  }

  private _emptyObjectOfCow() : ICow {
    return {
      numberFromEar: 0,
      kg: 0,
      birth: 0,
      howMuchEats: 0,
      numberOfLiveCattle: 0,
      age: 1,
      state: StateCattle.EARLY,
      group: 0,
      gynecologicalStatus: 'Verified'
    } as ICow;
  }

  private _newCowAction() : IActionMaterialColumn[] {
    return [
      {
        iconClass: 'fa_solid:gauge',
        classCss: 'edit',
        method: (row : DataSourceMaterialTable<ICow>) => {
          row.editable = !row.editable;
          this._dashboardService.addedNewCow(row.model)
            .pipe(takeUntil(this._destroyed$))
            .subscribe();
        }
      }
    ] as IActionMaterialColumn[];
  }

  private _actionTableListCow() : IActionMaterialColumn[] {
    return [
      {
        iconClass: 'fa_solid:gauge',
        classCss: 'edit',
        method: (row : DataSourceMaterialTable<ICow>) => {
          row.editable = !row.editable;
          if(!row.editable) {
            this._dashboardService.updatedCow(row.model)
              .pipe(takeUntil(this._destroyed$))
              .subscribe();
          }
        }
      },
      {
        iconClass: 'fa_solid:door-open',
        classCss: 'edit',
        method: (row : DataSourceMaterialTable<ICow>) => {
          if(!row.editable) {

          }
        }
      }
    ] as IActionMaterialColumn[];
  }
}
