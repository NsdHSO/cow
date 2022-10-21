import {
  Component,
  OnInit,
} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {
  DataSourceMaterialTable,
  IActionMaterialColumn,
} from "ngx-liburg";
import {SpinnerService} from "ngx-liburg-icon";
import {BehaviorSubject} from "rxjs";
import {ICow} from "./util/interfaces";

@Component({
  selector: "lib-cow-meat",
  templateUrl: "./cow-meat.component.html",
  styleUrls: ["./cow-meat.component.scss"],
})
export class CowMeatComponent implements OnInit {
  public dataSourceCow : ICow[] | any;
  public isLoading : BehaviorSubject<boolean> | undefined = new BehaviorSubject<boolean>(
    true);

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
