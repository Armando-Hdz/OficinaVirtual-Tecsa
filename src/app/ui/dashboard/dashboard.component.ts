import { Component, OnInit } from '@angular/core';
import { Data_bar_chart } from '../models/bar-chart';

import { IBarChart } from '../models/charts.interface';
import { NgxChartsModule } from '@swimlane/ngx-charts';

//import { Chart } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  //myChart = [];
  //list = [11,22,52,12];
  
  data: IBarChart[] = [];

  view: [number, number] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor() { }

  ngOnInit(): void { 
    this.data = Data_bar_chart;
  } //FIn NG ON INIT

     /*const num_Empleados:string = '5';
    const num_Productos:string = '12';
    const num_Servicios:string = '20';
    const num_Refacciones:string = '9';
    const num_Tareas:string = '40';*/

   

}
