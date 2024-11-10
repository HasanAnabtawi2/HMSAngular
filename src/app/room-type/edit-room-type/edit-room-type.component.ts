import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { right } from '@popperjs/core';
import { roomTypeDTO } from 'src/app/DTOs/RoomTypeDTO';
import { RoomTypeService } from 'src/app/Services/room-type.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-room-type',
  templateUrl: './edit-room-type.component.html',
  styleUrls: ['./edit-room-type.component.css']
})
export class EditRoomTypeComponent implements OnInit,OnChanges {


  
  constructor(private formBuilder:FormBuilder,private roomTypeService:RoomTypeService){
  
  }




  @ViewChild('closeModal') closeModal!:ElementRef
  @Output() onEditing =new EventEmitter<any>();

 @Input() selectedTypeId!:number

 selectedType!:roomTypeDTO


 form1!:FormGroup;




 ngOnInit() {
     


    
  this.form1=this.formBuilder.group({
    'txtRoomType':['',Validators.required],
    'txtCapacity':['',Validators.compose([Validators.required,Validators.min(1)])],
    'txtPrice':['',Validators.compose([Validators.required,Validators.min(1)])]
  });



}


 ngOnChanges(): void {


  if(this.selectedTypeId!=undefined){
  this.roomTypeService.LoadOne(this.selectedTypeId).subscribe({
    next:resData=>{this.selectedType=resData
       this.form1.controls['txtCapacity'].setValue(this.selectedType.capacity)
  this.form1.controls['txtPrice'].setValue(this.selectedType.price)
  this.form1.controls['txtRoomType'].setValue(this.selectedType.typeName)
    }
  })


}



    

  


 }
  
 roomType!:roomTypeDTO



    


    onSubmit() {

      if(this.form1.valid){

      this.roomType={ 
        id:this.selectedType.id,
        typeName:this.form1.value.txtRoomType,
        price:this.form1.value.txtPrice,
        capacity:this.form1.value.txtCapacity
    
        
      }
      this.roomTypeService.Update(this.roomType).subscribe({
        complete:()=>{
          this.closeModal.nativeElement.click()

          this.onEditing.emit();
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
  