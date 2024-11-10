import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { roomGetDTO } from 'src/app/DTOs/RoomGetDTO';
import { roomPostDTO } from 'src/app/DTOs/RoomPostDTO';
import { roomTypeDTO } from 'src/app/DTOs/RoomTypeDTO';
import { RoomTypeService } from 'src/app/Services/room-type.service';
import { RoomService } from 'src/app/Services/room.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-room',
  templateUrl: './edit-room.component.html',
  styleUrls: ['./edit-room.component.css']
})
export class EditRoomComponent implements OnInit,OnChanges {

  @ViewChild('closeModal') closeModal!:ElementRef
  @Output() onEdit =new EventEmitter<any>();
  @Input() selectedRoomId!:number;
  
 selectedRoom!:roomGetDTO;




  
  constructor(private formBuilder:FormBuilder,
    private roomService:RoomService,
    private roomTypeService:RoomTypeService){
  
  }

  form1!:FormGroup;
  

  ngOnChanges(): void {
    if(this.selectedRoomId!=undefined){
    this.roomService.LoadOne(this.selectedRoomId).subscribe({
      next:resData=>{
        this.selectedRoom=resData

        this.form1.controls['txtRoomNumber'].setValue(this.selectedRoom.roomNumber)
        this.form1.controls['selectRoomType'].setValue(this.selectedRoom.roomTypeId)
      

      }
    })
  }
  }


  roomTypes!:roomTypeDTO[]

    ngOnInit() {
     
     
      this.form1=this.formBuilder.group({
        'txtRoomNumber':['',Validators.required],
        'selectRoomType':['',Validators.required],
        
        
      });

      this.roomTypeService.LoadAll().subscribe({
        next:resdata=>this.roomTypes=resdata
      })
  
  }




  room!:roomPostDTO
   

  onSubmit() {

debugger
    if(this.form1.valid){
   
  this.room={
    id:this.selectedRoom.id, 
    roomNumber: this.form1.value.txtRoomNumber,
    roomTypeId: this.form1.value.selectRoomType
  }
  this.roomService.Update(this.room).subscribe(
    {
    complete:()=>{
      this.closeModal.nativeElement.click()
      this.onEdit.emit();

      Swal.fire({
        position: "center",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500
      });
    
    }}
  
  );
  
  }
  }
    


  }

  
  
  
  