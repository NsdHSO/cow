import {
  Component,
  OnInit,
} from "@angular/core";
import {Subject} from "rxjs";
import {ICardData} from "./util";
import {DashboardService} from "./util/service/dashboard.service";

@Component({
  selector: "lib-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  data : Subject<ICardData[]> = new Subject<ICardData[]>();

  constructor(private readonly _dashboardService : DashboardService) { }

  ngOnInit() : void {
    this.data = this._dashboardService.dashboardData$;
  }
}
