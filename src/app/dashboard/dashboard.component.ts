import { Component, OnInit } from '@angular/core';
import { an } from '@fullcalendar/core/internal-common';
import { options } from '@fullcalendar/core/preact';

import{Chart,registerables} from 'chart.js'
Chart.register(...registerables);
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 

  public config:any={
    type:'bar',
    data:{},
     
      options:{
        aspectRatio:1
      }
    }
    chart:any

    ngOnInit(): void {
      this.chart=new Chart('MyChart',this.config)
    }






  }

 


