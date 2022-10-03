import {Component, OnInit} from "@angular/core";
import {PageEvent} from "@angular/material/paginator";
import {ActivatedRoute} from "@angular/router";
import {DataSourceMaterialTable, IActionMaterialColumn} from "ngx-liburg";
import {SpinnerService} from "ngx-liburg-icon";
import {BehaviorSubject} from "rxjs";
import {ReportingService} from "./utils";
import {IMilkCow} from "./utils/interface/i-milk-cow";

@Component({
             selector   : "lib-reporting",
             templateUrl: "./reporting.component.html",
             styleUrls  : ["./reporting.component.scss"],
           })
export class ReportingComponent implements OnInit {
  public dataSourceMilkCow : IMilkCow[] | any;
  public isLoading : BehaviorSubject<boolean> | undefined = new BehaviorSubject<boolean>(
    true);
  public allItem                                          = 0;
  public selected = " ";

  constructor(
    private readonly _activateRouter : ActivatedRoute,
    private readonly _spinerStateSerice : SpinnerService,
    private readonly _reportingService : ReportingService) { }

  ngOnInit() : void {
    this._reportingService.getData.subscribe((cows : any) => {
      this.allItem           = cows.allItems;
      this.dataSourceMilkCow = cows.items.map((cowMilk : IMilkCow) => {
        this._spinerStateSerice.sendValue(true);
        const model = <IMilkCow> cowMilk;
        return {
          actions : this._actionTableListCow(),
          editable: false,
          model   : {
            ...model,
            insemination: model.numberIn.insemination,
            lact        : model.numberIn.lact,
          },
        } as DataSourceMaterialTable<any>;
      });
    });
  }

  public changePage(event : PageEvent) : void {
    this._reportingService.getDataForReporting(
      event.pageSize,
      event.pageIndex,
    );
  }

  public download() : void {
    this._reportingService.getCsv(10, 0);
  }

  private _actionTableListCow() : IActionMaterialColumn[] {
    return [
      {
        iconClass: "fa_solid:gauge",
        classCss : "edit",
        method   : (row : DataSourceMaterialTable<IMilkCow>) => {
          row.editable = !row.editable;
        },
      },
    ] as IActionMaterialColumn[];
  }
}
