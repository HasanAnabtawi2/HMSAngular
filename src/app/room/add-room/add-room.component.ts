import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { roomPostDTO } from 'src/app/DTOs/RoomPostDTO';
import { roomTypeDTO } from 'src/app/DTOs/RoomTypeDTO';
import { RoomTypeService } from 'src/app/Services/room-type.service';
import { RoomService } from 'src/app/Services/room.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.css']
})
export class AddRoomComponent implements OnInit {





  @ViewChild('closeModal') closeModal!:ElementRef
  @Output() onAdding =new EventEmitter<any>();

  
  constructor(private formBuilder:FormBuilder,private roomTypeService:RoomTypeService,private roomService:RoomService){
  
  }
  form1!:FormGroup;
    ngOnInit() {
      
      this.LoadRoomTypes();
     
      this.form1=this.formBuilder.group({
        'txtRoomNumber':['',Validators.required],
        'selectRoomType':['',Validators.required],
        
        
      });
    }

    roomTypes!:roomTypeDTO[];

    LoadRoomTypes(){
     
      this.roomTypeService.LoadAll().subscribe({
        next:(u)=>{this.roomTypes=u}
      })
    }


    room!:roomPostDTO

    onSubmit() {

      

      console.log(this.form1)
      if(this.form1.valid){

      this.room={
                id:0,
               roomNumber: this.form1.value.txtRoomNumber,
              roomTypeId:parseInt(this.form1.value.selectRoomType)
                  }
      this.roomService.Add(this.room).subscribe({

        complete:()=>{
          this.closeModal.nativeElement.click()
          this.onAdding.emit();
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
          });
        
        }

      })
      
      

      
     }
    
    
    
    
    }
  
  
  
  
  }