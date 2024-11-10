import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { InvoicesService } from '../Services/invoices.service';
import { InvoiceGetDTO } from '../DTOs/InvoiceGetDTO';
import { invoiceFiltersDTO } from '../DTOs/InvoiceFiltersDTO copy';



@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  constructor(private invoiceService:InvoicesService,){

  }


  selectedInvoiceId!:number

  selectInvoiceId(id:number){

    this.selectedInvoiceId=id;
  }

@ViewChild('guestNameSearch') guestNameSearch!:ElementRef
@ViewChild('roomTypeSearch') roomTypeSearch!:ElementRef
@ViewChild('paymentStatusSearch') paymentStatusSearch!:ElementRef


  invoices!:InvoiceGetDTO[]

  invoiceFilters!:invoiceFiltersDTO
  ngOnInit(): void {


    this.invoiceFilters={  
      guestName: '',
      roomType: '',
      paymentStatus: ''}

    this.invoiceService.LoadAll(this.invoiceFilters).subscribe({
      next:resData=>this.invoices=resData

    })
    
  }


  onApplyFilters(){

    this.invoiceFilters={  
      guestName: this.guestNameSearch.nativeElement.value,
      roomType: this.roomTypeSearch.nativeElement.value,
      paymentStatus: this.paymentStatusSearch.nativeElement.value}

    this.invoiceService.LoadAll(this.invoiceFilters).subscribe({
      next:resData=>this.invoices=resData

    })

  }






}
