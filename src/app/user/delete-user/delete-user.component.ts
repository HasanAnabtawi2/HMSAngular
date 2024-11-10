import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent {

  constructor(private httpClient:HttpClient){
  
  }
  @Input() deletePath!:string
  @Input() userName!:string
  @Output() onRefresh =new EventEmitter<any>();
  @ViewChild('closeModal')  closeModal!:ElementRef

  



onDelete(){

  debugger
  this.httpClient.delete<any>("http://localhost/Hms/api/"+this.deletePath+this.userName).subscribe({
  
    complete:()=>{
  
      this.closeModal.nativeElement.click();
      this.onRefresh.emit()
  
    }
    
  })


  

}
}
