import { Component, Input } from '@angular/core';

import { ChartType } from 'chart.js';
import { Colors, Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-chart-donut',
  templateUrl: './chart-donut.component.html',
  styles: [],
})
export class ChartDonutComponent {
  @Input() title: string = '';
  @Input('labels') doughnutChartLabels: Label[] = [];
  @Input('data') doughnutChartData: MultiDataSet = [];

  doughnutChartType: ChartType = 'doughnut';

  // Colors
  public colors: Colors[] = [
    {
      backgroundColor: ['#6857E6', '#009FEE', '#F02059'],
    },
  ];

  // events
  public chartClicked({
    event,
    active,
  }: {
    event: MouseEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active,
  }: {
    event: MouseEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }
}
