import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { guestDTO } from 'src/app/DTOs/GuestDTO';
import { GuestService } from 'src/app/Services/guest.service';
import {formatDate} from '@angular/common';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-edit-guest',
  templateUrl: './edit-guest.component.html',
  styleUrls: ['./edit-guest.component.css']
})
export class EditGuestComponent implements OnInit,OnChanges {





  
  constructor(private formBuilder:FormBuilder,private guestService:GuestService){
  
  }



  @ViewChild('closeModal') closeModal!:ElementRef
  @Output() onEdit =new EventEmitter<any>();
  @Input({required:true}) selectedGuestId!:number
  guest!:guestDTO

  form1!:FormGroup;
    ngOnInit() {
     
      this.form1=this.formBuilder.group({
        'txtFirstName':['',Validators.required],
        'txtLastName':['',Validators.required],
        'dateDOB':['',Validators.required],
        'txtEmail':['',Validators.compose([Validators.email,Validators.required])],
        'txtContactNumber':['',Validators.pattern('07(7|8|9)\\d{7}')],
        'txtDocumentNumber':['',Validators.required],

        
      });
    }
  
    ngOnChanges(changes: SimpleChanges): void {
     
      if(this.selectedGuestId!=undefined){
      this.guestService.LoadOne(this.selectedGuestId).subscribe({
        next:resData=>{
          this.guest=resData

          this.form1.controls['txtFirstName'].setValue(this.guest.firstName)
          this.form1.controls['txtLastName'].setValue(this.guest.lastName)
          this.form1.controls['dateDOB'].setValue(formatDate(this.guest.dob,'yyyy-MM-dd', 'en-US'))
          this.form1.controls['txtEmail'].setValue(this.guest.email)
          this.form1.controls['txtContactNumber'].setValue(this.guest.contactNumber)
          this.form1.controls['txtDocumentNumber'].setValue(this.guest.documentNumber)
        }
    })
  }
    }

    updatedGuest!:guestDTO
    onSubmit() {
    
debugger

      this.updatedGuest={id: this.guest.id,
      firstName: this.form1.value.txtFirstName,
      lastName: this.form1.value.txtLastName,
      dob: this.form1.value.dateDOB,
      email: this.form1.value.txtEmail,
      contactNumber: this.form1.value.txtContactNumber,
      documentNumber: this.form1.value.txtDocumentNumber
      }
      this.guestService.Update(this.updatedGuest).subscribe(

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
          
          }
        }
      )
    
  
    }
    
       
    

  }