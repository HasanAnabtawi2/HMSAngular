import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { guestDTO } from 'src/app/DTOs/GuestDTO';
import { GuestService } from 'src/app/Services/guest.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-guest',
  templateUrl: './add-guest.component.html',
  styleUrls: ['./add-guest.component.css']
})
export class AddGuestComponent implements OnInit {





  
  constructor(private formBuilder:FormBuilder, private guestService:GuestService){
  
  }
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

    @Output() onAdd =new EventEmitter<any>();

    @ViewChild('closeModal') closeModal!:ElementRef

    guest!:guestDTO;

    onSubmit() {
      
      this.guest={
        id: 0,
        firstName: this.form1.value.txtFirstName,
        lastName: this.form1.value.txtLastName,
        dob: this.form1.value.dateDOB,
        email: this.form1.value.txtEmail,
        contactNumber: this.form1.value.txtContactNumber,
        documentNumber: this.form1.value.txtDocumentNumber
      }

     if(this.form1.valid){
      this.guestService.Add(this.guest).subscribe(
        {
          complete:()=>{
            this.closeModal.nativeElement.click()
            this.onAdd.emit();
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Your work has been saved",
              showConfirmButton: false,
              timer: 1500
            });
          
          }
        }
      );
     }
        
    
      }


      
      
    
    }
  

  