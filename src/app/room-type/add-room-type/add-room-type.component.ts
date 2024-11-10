import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as bootstrap from 'bootstrap';
import { roomTypeDTO } from 'src/app/DTOs/RoomTypeDTO';
import { RoomTypeService } from 'src/app/Services/room-type.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-room-type',
  templateUrl: './add-room-type.component.html',
  styleUrls: ['./add-room-type.component.css']
})
export class AddRoomTypeComponent implements OnInit {



 

  
  constructor(private formBuilder:FormBuilder,private router:Router,private roomTypeService:RoomTypeService){
  
  }



@ViewChild('closeModal') closeModal!:ElementRef
@Output() onAdding =new EventEmitter<any>();


  form1!:FormGroup;
    ngOnInit() {
     
      this.form1=this.formBuilder.group({
        'txtRoomType':['',Validators.required],
        'txtCapacity':['',Validators.compose([Validators.required,Validators.min(1)])],
        'txtPrice':['',Validators.compose([Validators.required,Validators.min(1)])]
      });
    }
  
  
  
   roomType!:roomTypeDTO

    onSubmit() {

      if(this.form1.valid){

      this.roomType={ 
        id:0,
        typeName:this.form1.value.txtRoomType,
        price:this.form1.value.txtPrice,
        capacity:this.form1.value.txtCapacity
    
        
      }
      this.roomTypeService.Add(this.roomType).subscribe({

       complete:()=>{

  
        console.log("completed")
        this.closeModal.nativeElement.click()

        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500
        });


        this.onAdding.emit();
       },
       error:()=>{
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          
        });
       }

      })

  
        
  

      
     }
    
    
    
    
    }
  
  
  
  
  
  
  }