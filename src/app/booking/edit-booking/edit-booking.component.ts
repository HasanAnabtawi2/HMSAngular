import { formatDate } from '@angular/common';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { guestDTO } from 'src/app/DTOs/GuestDTO';
import { roomGetDTO } from 'src/app/DTOs/RoomGetDTO';
import { bookingPostDTO } from 'src/app/DTOs/bookingPostDTO';
import { guestFiltersDTO } from 'src/app/DTOs/guestFilters';
import { roomFiltersDTO } from 'src/app/DTOs/roomFilters';
import { BookingService } from 'src/app/Services/booking.service';
import { GuestService } from 'src/app/Services/guest.service';
import { RoomService } from 'src/app/Services/room.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-booking',
  templateUrl: './edit-booking.component.html',
  styleUrls: ['./edit-booking.component.css']
})
export class EditBookingComponent implements OnInit, OnChanges{

  constructor(private formBuilder:FormBuilder,
    private roomService:RoomService,
    private guestService:GuestService,
    private bookigService:BookingService){

      
  }


  rooms!:roomGetDTO[];
guests!:guestDTO[];
  ngOnInit(): void {
    this.getGuests();
    this.getRooms();
    this.buildForm()
  }



  @Input({required:true}) selectedBookingId!:number;

  form!:FormGroup;

buildForm(){
  this.form=this.formBuilder.group({
    selectRoomNumber:['',Validators.required],
    selectGuest:['',Validators.required],
    dateExpectedCheckIn:['',Validators.compose([Validators.required])],
    dateExpectedCheckOut:['',Validators.compose([Validators.required])]
    
  })
}


roomFilters!:roomFiltersDTO

getRooms(){
  this.roomFilters={
    roomNumber:'',
    roomType:'',
    status:''
  }
  this.roomService.LoadAll(this.roomFilters).subscribe({
    next:resData=>this.rooms=resData
  })
}


selectedBooking!:bookingPostDTO
ngOnChanges(changes: SimpleChanges): void {
  if(this.selectedBookingId!=undefined){
  this.bookigService.LoadOne(this.selectedBookingId).subscribe({
    next:resData=>{
      this.selectedBooking=resData
      this.form.controls['selectRoomNumber'].setValue(this.selectedBooking.roomId)
      this.form.controls['selectGuest'].setValue(this.selectedBooking.guestId)
      this.form.controls['dateExpectedCheckIn'].setValue(formatDate(this.selectedBooking.expectedcheckInDate,'yyyy-MM-dd','en-Us'))
      this.form.controls['dateExpectedCheckOut'].setValue(formatDate(this.selectedBooking.expectedcheckOutDate,'yyyy-MM-dd','en-Us'))

    }
    
  })
}


}

guestFilters!:guestFiltersDTO
getGuests(){
  this.guestFilters={
    guestName: '',
    documentNumber: '',
    email: '',
    contactNumber: '',
  }

  this.guestService.LoadAll(this.guestFilters).subscribe({
    next:resData=>this.guests=resData
  })
}

book!:bookingPostDTO

onSubmit(){

  if(this.form.valid){



  this.book=  {
    id: this.selectedBookingId,
  expectedcheckOutDate: this.form.value.dateExpectedCheckOut,
  expectedcheckInDate: this.form.value.dateExpectedCheckIn,
  guestId: this.form.value.selectGuest,
  roomId: this.form.value.selectRoomNumber}

  this.bookigService.Update(this.book).subscribe({
  complete:()=>{

    window.location.reload();

    },
  

      error:(error:any)=>{
        console.log(error.error.message)
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.error.message,
          
        });     

      

    }
  })
  
}
}







}
