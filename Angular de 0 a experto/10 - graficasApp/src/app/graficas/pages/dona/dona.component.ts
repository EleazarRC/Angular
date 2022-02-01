import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {
  // Doughnut
  public doughnutChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    //https://www.chartjs.org/docs/latest/
    datasets: [
      {
        data: [350, 450, 100],
        backgroundColor: ['#1A25E8', '#1B60F2', '#2490DB'],
        hoverBackgroundColor: ['#5645F6', '#3B55D4', '#4E91EB']
      },
      {
        data: [100, 500, 500],
        backgroundColor: ['#1A25E8', '#1B60F2', '#2490DB'],
        hoverBackgroundColor: ['#5645F6', '#3B55D4', '#4E91EB']
      },/* ,
     { data: [ 50, 150, 120 ] },
     { data: [ 250, 130, 70 ] } */
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }


}
