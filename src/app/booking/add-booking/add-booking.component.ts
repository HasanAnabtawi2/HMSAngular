import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { bookingPostDTO } from 'src/app/DTOs/bookingPostDTO';
import { guestDTO } from 'src/app/DTOs/GuestDTO';
import { guestFiltersDTO } from 'src/app/DTOs/guestFilters';
import { roomFiltersDTO } from 'src/app/DTOs/roomFilters';
import { roomGetDTO } from 'src/app/DTOs/RoomGetDTO';
import { BookingService } from 'src/app/Services/booking.service';
import { GuestService } from 'src/app/Services/guest.service';
import { RoomService } from 'src/app/Services/room.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-add-booking',
  templateUrl: './add-booking.component.html',
  styleUrls: ['./add-booking.component.css']
})
export class AddBookingComponent implements OnInit {


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
    id: 0,
  expectedcheckOutDate: this.form.value.dateExpectedCheckOut,
  expectedcheckInDate: this.form.value.dateExpectedCheckIn,
  guestId: this.form.value.selectGuest,
  roomId: this.form.value.selectRoomNumber}

  this.bookigService.Add(this.book).subscribe({
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
