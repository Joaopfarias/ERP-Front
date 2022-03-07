import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
    this.chartLine()
    this.chartPie()
  }

  chartLine() {
    var ctx = document.getElementById("lineChart") as HTMLCanvasElement;
    const myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
        datasets: [{
          label: 'Dados Dashboard',
          backgroundColor: 'rgb(133, 169, 255)  ',
          borderColor: 'rgb(133, 169, 255)',
          tension: 0.3,
          data: [0, 600, 850, 670, 850, 120, 225, 140, 120, 242, 105, 170],
        }]
      },
      options: {
        responsive: true
      }
    });
  }

  chartPie() {
    var ctx = document.getElementById("pieChart") as HTMLCanvasElement;
    const myChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
        datasets: [{
          label: 'My First Dataset',
          data: [300, 50, 100, 70],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
            'rgb(161, 0, 0)'
          ],
          hoverOffset: 4,
        }]
      },
      options: {
        plugins: {
          legend: {
            display: true,
            position: 'bottom',
          }
        }
      }
    });
  }

}
