import { Component, OnInit } from '@angular/core';
import { an } from '@fullcalendar/core/internal-common';
import { options } from '@fullcalendar/core/preact';

import{Chart,registerables} from 'chart.js'
import { DasboardService } from '../Services/dasboard.service';
Chart.register(...registerables);
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 
constructor(private dashboardService:DasboardService){
}
  
    totalIncome!:number
    numberOfGuests!:number
    numberOfRooms!:number
    numberOfRoomTypes!:number
    roomTypes:any=[]
    numberOfUnPaidInvoices!:number
    numberOfPaidInvoices!:number
    checkedIn!:number
    canceled!:number
    checkedOut!:number
    confirmed!:number

    ngOnInit(): void {
      this.dashboardService.dashboardReport().subscribe({
        next:resData=>{

          this.totalIncome=resData.totalIncome
          this.numberOfGuests=resData.totalNumberOfGuests
          this.numberOfRooms=resData.numberOfRooms
          this.numberOfRoomTypes=resData.numberOfTypes
          this.roomTypes=resData.roomsByRoomTypes
          this.numberOfUnPaidInvoices=resData.numberOfUnpaidInvoices
          this.numberOfPaidInvoices=resData.numberOfPaidInvoices
          this.canceled=resData.numberOfCanceledBookings
          this.confirmed=resData.numberOfConfirmedBookings
          this.checkedIn=resData.numberOfCheckedInBookings
          this.checkedOut=resData.numberOfCheckedOutBookings

        }
      })
    }






  }

 


