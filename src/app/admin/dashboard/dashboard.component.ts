import { Component } from '@angular/core';
import Chart from 'chart.js/auto';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  chart:any;
  ngOnInit(){
    this.createChart();
  }
  createChart(){
  
    this.chart = new Chart("MyChart", {
      type: 'line', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['January', 'February', 'March','April', 'May', 'June', 'July', 'August', 
        'September','October','November','December' ], 
	       datasets: [
          {
            label: "AdList",
            data: ['0','0', '0', '0', '0',
								 '0', '5', '7','0','0', '0','0'],
            backgroundColor: 'blue'
          },
          {
            label: "Promotion",
            data: ['0','0', '0', '0', '0',
            '0', '5', '7','0','0', '0','0'],
            backgroundColor: 'limegreen'
          }  
        ]
      },
      options: {
        aspectRatio:2.5
      }
      
    });
  }

}
