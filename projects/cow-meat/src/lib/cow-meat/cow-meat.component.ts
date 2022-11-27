import {
  Component,
  OnInit,
} from "@angular/core";
import {FormControl} from '@angular/forms';
import {MatDrawerMode} from '@angular/material/sidenav';
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
export class CowMeatComponent{
  public isLoading : BehaviorSubject<boolean> | undefined = new BehaviorSubject<boolean>(
    true);
  public shouldRun =true;
  mode = new FormControl('over' as MatDrawerMode);

}
