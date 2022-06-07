import { Component } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-graphics1',
  templateUrl: './graphics1.component.html',
  styleUrls: ['./graphics1.component.css']
})
export class Graphics1Component  {
 public labels1: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
 public data1 = [
   800, 200, 435
 ]

}
