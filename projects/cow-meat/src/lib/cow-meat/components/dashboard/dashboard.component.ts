import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {
  DataSourceMaterialTable,
  IActionMaterialColumn,
  TableMaterialModule
} from 'ngx-liburg';
import {SpinnerService} from 'ngx-liburg-icon';
import {ICow} from '../../util/interfaces';
import {
  CowMeatModule,
  ProfitabilityClockComponent
} from 'projects/cow-meat/src/public-api';

@Component({
  selector: 'lib-dashboard',
  standalone: true,
  imports: [CommonModule, TableMaterialModule, ProfitabilityClockComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public dataSourceCow : ICow[] | any;

  constructor(
    private readonly _activateRouter : ActivatedRoute,
    private readonly _spinerStateSerice : SpinnerService,
  ) { }

  ngOnInit() : void {
    this.dataSourceCow = this._activateRouter.snapshot.data["allData"].map((cow : ICow) => {
      this._spinerStateSerice.sendValue(true);
      const model = <ICow> cow;
      return {
        actions: this._actionTableListCow(),
        editable: false,
        model: {
          ...model,
        },
      } as DataSourceMaterialTable<any>;
    });
  }

  private _actionTableListCow() : IActionMaterialColumn[] {
    return [
      {
        iconClass: "fa_solid:gauge",
        classCss: "edit",
        method: (row : DataSourceMaterialTable<ICow>) => {
          row.editable = !row.editable;
        },
      },
    ] as IActionMaterialColumn[];
  }
}
