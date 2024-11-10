import { Component, ElementRef, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { BookingService } from '../Services/booking.service';
import { bookingGetDTO } from '../DTOs/bookingGetDTO';
import { bookingFiltersDTO } from '../DTOs/bookingFiltersDTO';


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit,OnChanges {

  constructor(private bookingService:BookingService){


  }


  bookingFilters!:bookingFiltersDTO
  

  bookings!:bookingGetDTO[]
  ngOnInit(): void {
    this.bookingFilters={
      expectedCheckInDate: '',
      expectedCheckOutDate: '',
      guestName: '',
      roomNumber: '',
      status: ''
      
    }
   
    this.LoadAll()



  }

  LoadAll(){
    this.bookingService.LoadAll(this.bookingFilters).subscribe({
      next:resData=>this.bookings=resData
    })
  }



  ngOnChanges(changes: SimpleChanges): void {
    

  }

 

  selectedBookingId!:number

  selectBooking(id:number){

this.selectedBookingId=id



	}


  @ViewChild('guestNameSearch') guestNameSearch!:ElementRef;
  @ViewChild('roomNumberSearch') roomNumberSearch!:ElementRef;
  @ViewChild('statusSearch') statusSearch!:ElementRef;
  @ViewChild('checkInDate') checkInDate!:ElementRef;
  @ViewChild('checkOutDate') checkOutDate!:ElementRef;
  

  applyFilters(){


    this.bookingFilters={
      expectedCheckInDate: this.checkInDate.nativeElement.value,
      expectedCheckOutDate: this.checkOutDate.nativeElement.value,
      guestName: this.guestNameSearch.nativeElement.value,
      roomNumber: this.roomNumberSearch.nativeElement.value,
      status: this.statusSearch.nativeElement.value
      
    }

    this.bookingService.LoadAll(this.bookingFilters).subscribe({
      next:resData=>this.bookings=resData,
 
    })
    

  }


}
