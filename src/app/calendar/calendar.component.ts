import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';





import { BookingService } from '../Services/booking.service';
import { roomAvailabilityDTO } from '../DTOs/roomAvailability';
import { RoomTypeService } from '../Services/room-type.service';
import { roomTypeDTO } from '../DTOs/RoomTypeDTO';
import { formatDate } from '@angular/common';
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit  {
  
  constructor(private bookingService:BookingService,private roomTypeService:RoomTypeService){

  }
  dates:Date[]=[]
  startDate=new Date();
  
  roomAvailability!:roomAvailabilityDTO[]
  roomTypes!:roomTypeDTO[]

  year=String(this.startDate.getFullYear())
  month=String(this.startDate.getMonth()+1).padStart(2,'0')
  Date=String(this.startDate.getDate()).padStart(2,'0')

  startDateString=this.year+'-'+this.month+'-'+this.Date
  

  
  @ViewChild('startDateSearch') startDateSearch!:ElementRef
  @ViewChild('roomTypeSearch') roomTypeSearch!:ElementRef
  
  ngOnInit(): void {
debugger
     
    for (let i = 0; i < 7; i++) {
    
      const currentDate = new Date(this.startDate);
      currentDate.setDate(currentDate.getDate() + i);
      this.dates.push(currentDate);
    }

    this.LoadAll(this.startDate.toDateString(),'');

    this.LoadAllRoomTypes()

    

  }

  LoadAll(startDate:string,roomType:string){
    this.bookingService.getRoomAvailability(startDate,roomType).subscribe({
      next:resData=>{this.roomAvailability=resData
      
      }
    })
  }

  LoadAllRoomTypes(){
    this.roomTypeService.LoadAll().subscribe({
      next:resData=>{this.roomTypes=resData}
    })
  }


  onChange(){
    
   this.LoadAll(this.startDateSearch.nativeElement.value,this.roomTypeSearch.nativeElement.value)

   this.dates=[]
   for (let i = 0; i < 7; i++) {
    
    const currentDate = new Date(this.startDateSearch.nativeElement.value);
    currentDate.setDate(currentDate.getDate() + i);
    this.dates.push(currentDate);
  }
    

  }





  
  
}
