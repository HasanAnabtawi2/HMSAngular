import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { roomGetDTO } from '../DTOs/RoomGetDTO';

import { RoomService } from '../Services/room.service';
import { HttpClient } from '@angular/common/http';
import { roomFiltersDTO } from '../DTOs/roomFilters';
import { roomTypeDTO } from '../DTOs/RoomTypeDTO';
import { RoomTypeService } from '../Services/room-type.service';


@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {







  constructor(private roomService:RoomService,private httpClient:HttpClient,private roomTypeService:RoomTypeService){

  }

  rooms!:roomGetDTO[];

  ngOnInit(): void {
    
    
    
    this.LoadAll();

    this.loadAllRoomTypes();




  }

  roomFilters!:roomFiltersDTO

  LoadAll(){
    this.roomFilters={
      roomNumber:'',
      roomType:'',
      status:''
    }
    this.roomService.LoadAll(this.roomFilters).subscribe({
      next:data=>{
        this.rooms=data;
      }
    })
  }
  selectedRoomId!:number

  selectRoomId(id:number){

this.selectedRoomId=id



	}
    
  selectedRoom!:roomGetDTO
  onSelectRoom(selectedRoom:roomGetDTO){

    this.selectedRoom=selectedRoom;

  }

  
roomTypes!:roomTypeDTO[]

loadAllRoomTypes(){
  this.roomTypeService.LoadAll().subscribe({
    next:resData=>{
      this.roomTypes=resData
    }
  })
}

@ViewChild('roomNumberSearch') roomNumberSearch!:ElementRef
@ViewChild('roomTypeSearch') roomTypeSearch!:ElementRef
@ViewChild('statusSearch') statusSearch!:ElementRef

applyFilters(){

this.roomFilters={
  roomNumber:this.roomNumberSearch.nativeElement.value,
  roomType:this.roomTypeSearch.nativeElement.value,
  status:this.statusSearch.nativeElement.value
}

this.roomService.LoadAll(this.roomFilters).subscribe({
  next:resData=>{
    this.rooms=resData
  }
})

}


}
