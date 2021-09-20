import { Component, OnInit } from '@angular/core';

import { Chart } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  //myChart = [];
  //list = [11,22,52,12];
  constructor() { }

  ngOnInit(): void {
    const num_Empleados:string = '5';
    const num_Productos:string = '12';
    const num_Servicios:string = '20';
    const num_Refacciones:string = '9';
    const num_Tareas:string = '40';

    /*this.mychart = new Chart('canvas', {
      type:'bar',
      data:{
        labels: this.list,
        datasets:[
          {
          data: num_Empleados,
          backgroundColor:[
            'red',
            'green',
            'blue',
            'gray',
            'orange',
          ]
          },
        ]
      }
    })*/

    //var ctx = document.getElementById('myChart');
    var myChart = new Chart('myChart', {
    type: 'bar',
    data: {
        labels: ['Usuarios', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: 'Gráficos de la Semana',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

  } //FIn NG ON INIT

}
