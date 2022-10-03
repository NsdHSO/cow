import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {DataSourceMaterialTable, IActionMaterialColumn} from "ngx-liburg";
import {SpinnerService} from "ngx-liburg-icon";
import {BehaviorSubject} from "rxjs";
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

  constructor(
    private readonly _activateRouter : ActivatedRoute,
    private readonly _spinerStateSerice : SpinnerService) { }

  ngOnInit() : void {
    this.dataSourceMilkCow = this._activateRouter.snapshot.data["allData"].map((cowMilk : IMilkCow) => {
      this._spinerStateSerice.sendValue(true);
      const model = <IMilkCow> cowMilk;
      return {
        actions : this._actionTableListCow(),
        editable: false,
        model   : {
          ...model,
          insemination: model.numberIn.insemination,
          lact: model.numberIn.lact
        },
      } as DataSourceMaterialTable<any>;
    });
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
