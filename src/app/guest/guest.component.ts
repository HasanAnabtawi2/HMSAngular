import { Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { guestDTO } from '../DTOs/GuestDTO';
import { HttpClient } from '@angular/common/http';
import { GuestService } from '../Services/guest.service';
import { guestFiltersDTO } from '../DTOs/guestFilters';

@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.css']
})
export class GuestComponent implements OnInit {

 

  guests!:guestDTO[]



  @ViewChild('guestNameSearch')  guestNameSearch!:ElementRef
  @ViewChild('guestEmailSearch')  guestEmailSearch!:ElementRef
  @ViewChild('documentNumberSearch')  documentNumberSearch!:ElementRef
  @ViewChild('contactNumberSearch')  contactNumberSearch!:ElementRef
  


  constructor(private modalService:NgbModal,private guestService:GuestService){

  }


  ngOnInit(): void {

   
      this.LoadAll();

  }



  LoadAll(){
    this.guestFilters={
      guestName: '',
      documentNumber: '',
      email: '',
      contactNumber: '',
    }

    this.guestService.LoadAll(this.guestFilters).subscribe({
      next:(resData)=>{
                
        this.guests=resData;

      }
    })
  }
  
  
  selectedGuestId!:number

  selectGuestId(id:number){

this.selectedGuestId=id



	}

  guestFilters!:guestFiltersDTO

  applyFilters(){

    this.guestFilters={  
      guestName: this.guestNameSearch.nativeElement.value,
      documentNumber: this.documentNumberSearch.nativeElement.value,
      email: this.guestEmailSearch.nativeElement.value,
      contactNumber: this.contactNumberSearch.nativeElement.value,
      }

    this.guestService.LoadAll(this.guestFilters).subscribe({
      next:resData=>this.guests=resData

    })

  }
  

}
