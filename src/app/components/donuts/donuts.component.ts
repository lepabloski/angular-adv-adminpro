import { Component, Input } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
@Component({
  selector: 'app-donuts',
  templateUrl: './donuts.component.html',
  styleUrls: ['./donuts.component.css'],
})
export class DonutsComponent {
  @Input() title: string = 'Sin titulo';
  @Input() labels: string[] = [];
  @Input() inputData: number[] = [];

  // Doughnut
  @Input('labels') doughnutChartLabels: string[] = [ 'labels1', 'labels2', 'labels3' ];
  @Input('data') doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [{ data: [ 350, 450, 100 ] }],
  };
  public doughnutChartType: ChartType = 'doughnut';
}
