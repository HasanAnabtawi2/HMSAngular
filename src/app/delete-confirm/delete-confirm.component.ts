import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-delete-confirm',
  templateUrl: './delete-confirm.component.html',
  styleUrls: ['./delete-confirm.component.css']
})
export class DeleteConfirmComponent  {


  @Input() deletePath!:string
  @Input() id!:number
  @Output() onRefresh =new EventEmitter<any>();
  @ViewChild('closeModal')  closeModal!:ElementRef

constructor(private httpClient:HttpClient){
  
}






onDelete(){


this.httpClient.delete<any>("http://localhost/Hms/api/"+this.deletePath+this.id).subscribe({

  complete:()=>{

    this.closeModal.nativeElement.click();
    this.onRefresh.emit();
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Deleted Successfully",
      showConfirmButton: false,
      timer: 1500
    });

  }
  
})




}














}
