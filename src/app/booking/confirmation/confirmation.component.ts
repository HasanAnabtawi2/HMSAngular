import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent {

constructor(private httpClient:HttpClient){

}

  @Input({required:true}) buttonValue!:string
  @Input({required:true}) modalId!:string
  @Input({required:true}) path!:string
  @Input({required:true}) bookingId!:number
  @Output() onRefresh=new EventEmitter<any>()
  @ViewChild('closeModal') closeModal!:ElementRef 
  

  onSubmit(){

    debugger
     this.httpClient.post('http://localhost/Hms/api/'+this.path+'?bookingId='+this.bookingId,this.bookingId).subscribe(
      {
        complete:()=>{
          this.closeModal.nativeElement.click()
          this.onRefresh.emit();
        
        },
        error:(error:any)=>{
            console.log(error.error.message)
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: error.error.message,
              
            });          
        }
      }
     )

    

    


  }
}
