import {CommonModule} from '@angular/common';
import {
  Component,
  OnInit
} from '@angular/core';
import {
  ActivatedRoute,
  Params,
  Router
} from '@angular/router';
import * as moment_ from 'moment';
import {
  DataSourceMaterialTable,
  IActionMaterialColumn,
  TableMaterialModule
} from 'ngx-liburg';
import {SpinnerService} from 'ngx-liburg-icon';
import {ProfitabilityClockComponent} from 'projects/cow-meat/src/public-api';
import {
  Subject,
  switchMap,
  takeUntil
} from 'rxjs';
import {
  ICow,
  StateCattle
} from '../../util/interfaces';
import {CowMeatService} from '../../util/service';
import {DashboardService} from './util/dashboard.service';

const moment = moment_;

@Component({
  selector: 'lib-dashboard',
  standalone: true,
  imports: [
    CommonModule, TableMaterialModule,
    ProfitabilityClockComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public dataSourceCow : ICow[] | any;
  private _destroyed$ : Subject<void> = new Subject<void>();

  constructor(
    private readonly _activateRouter : ActivatedRoute,
    private readonly _router : Router,
    private readonly _spinerStateSerice : SpinnerService,
    private readonly _dashboardService : DashboardService,
    private readonly _cowMeatService : CowMeatService
  ) { }

  ngOnInit() : void {
    this._cowMeatService.cowData$.pipe(
      takeUntil(this._destroyed$))
      .subscribe((data : ICow[]) => {
        debugger
        this.dataSourceCow = data.map(
          (cow : ICow) => {
            this._spinerStateSerice.sendValue(
              true);
            const model = <ICow> cow;
            return {
              actions: this._actionTableListCow(),
              editable: false,
              model: {
                ...model
              }
            } as DataSourceMaterialTable<any>;
          });
      });
  }

  public addedNewCow() : void {
    const newCow = {
      actions: this._newCowAction(),
      editable: false,
      model: this._emptyObjectOfCow()
    };
    this.dataSourceCow = [
      newCow, ...this.dataSourceCow
    ];
  }

  public goToSidenav(
    path = 'edit-cow',
    id : number) : void {
    const query : Params = {
      cowId: id
    };
    this._cowMeatService.sidenavNextValue(
      {
        path: path,
        queryParam: query
      });
  }

  private _emptyObjectOfCow() : ICow {
    return {
      numberFromEar: 0,
      kg: 0,
      birth: moment(new Date())
        .format('DD/MM/YYYY'),
      howMuchEats: 0,
      numberOfLiveCattle: 0,
      age: 1,
      state: StateCattle.EARLY,
      group: 0,
      gynecologicalStatus: 'Verified',
      gender: 1
    } as ICow;
  }

  private _newCowAction() : IActionMaterialColumn[] {
    return [
      {
        iconClass: 'fa_solid:gauge',
        classCss: 'edit',
        method: (row : DataSourceMaterialTable<ICow>) => {
          row.editable = !row.editable;
          if(!row.editable) {
            this._dashboardService.addedNewCow(
              row.model)
              .pipe(
                switchMap(
                  data => this._cowMeatService.getCows()),
                takeUntil(
                  this._destroyed$)
              )
              .subscribe();
          }
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
            this._dashboardService.updatedCow(
              row.model)
              .pipe(takeUntil(
                this._destroyed$))
              .subscribe();
          }
        }
      },
      {
        iconClass: 'fa_solid:door-open',
        classCss: 'edit',
        method: (row : DataSourceMaterialTable<ICow>) => {
          if(!row.editable) {
            this.goToSidenav(
              'edit-cow', row.model.id);
          }
        }
      }
    ] as IActionMaterialColumn[];
  }

  public ngOnDestroy() : void {
    this._destroyed$.next();
    this._destroyed$.complete();
  }
}
