import { Component, OnInit } from '@angular/core';
import {ChartOptions} from "chart.js";

@Component({
  selector: 'cow-profitability-clock',
  templateUrl: './profitability-clock.component.html',
  styleUrls: ['./profitability-clock.component.scss']
})
export class ProfitabilityClockComponent implements OnInit {
  // Pie
  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: false,
  };
  public pieChartLabels = [ [ 'Download', 'Sales' ], [ 'In', 'Store', 'Sales' ], 'Mail Sales' ];
  public pieChartDatasets = [ {
    data: [ 300, 500, 100 ]
  } ];
  public pieChartLegend = true;
  public pieChartPlugins = [];
  constructor() { }

  ngOnInit(): void {
  }

}
