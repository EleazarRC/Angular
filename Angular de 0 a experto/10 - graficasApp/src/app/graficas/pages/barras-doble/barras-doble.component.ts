import { Component, OnInit } from '@angular/core';
import { ChartData, ChartDataset } from 'chart.js';

@Component({
  selector: 'app-barras-doble',
  templateUrl: './barras-doble.component.html',
  styles: [
  ]
})
export class BarrasDobleComponent{

  barChartData1 = {
    labels: [ '1020', '1021', '1022', '1023', '1024', '1025', '1026'],
    datasets: [
      { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A' },
      { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B' },
      { data: [ 8, 38, 70, 59, 66, 82, 100 ], label: 'Series C', backgroundColor: '#000', hoverBackgroundColor: 'red' }
    ]
  };

  barChartData2 = {
    labels: [ '2020', '2021', '2022', '2023', '2024', '2025'],
    datasets: [
      { data: [  59, 80, 81, 56, 55, 40 ], label: 'Series A' },
      { data: [  48, 40, 19, 86, 27, 90 ], label: 'Series B' },
      { data: [  38, 70, 59, 66, 82, 100 ], label: 'Series C', backgroundColor: '#000', hoverBackgroundColor: 'red' }
    ]
  };


}
