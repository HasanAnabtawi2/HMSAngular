import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mark-as-paid',
  templateUrl: './mark-as-paid.component.html',
  styleUrls: ['./mark-as-paid.component.css']
})
export class MarkAsPaidComponent {

  constructor(private httpClient:HttpClient){

  }
  
    @Input({required:true}) buttonValue!:string
    @Input({required:true}) modalId!:string

    @Input({required:true}) invoiceId!:number
    
  
    onSubmit(){
  
      
       this.httpClient.post('http://localhost/Hms/api/Invoice/MarkAsPaid?invoiceId='+this.invoiceId,this.invoiceId).subscribe({

        complete:()=>{

          Swal.fire({
            position: "center",
            icon: "success",
            title: "Invoice Marked As Paid",
            showConfirmButton: false,
            timer: 1500
          });

        }
       })
  
       window.location.reload()
  
      
  
  
    }
  }


