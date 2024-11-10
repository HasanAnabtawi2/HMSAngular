import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InvoiceGetDTO } from '../DTOs/InvoiceGetDTO';
import { InvoicePostDTO } from '../DTOs/InvoicePostDTO';
import { invoiceFiltersDTO } from '../DTOs/InvoiceFiltersDTO copy';

@Injectable({
  providedIn: 'root'
})
export class InvoicesService {

  constructor(private httpClient:HttpClient) { }

  LoadAll(invoiceFilters:invoiceFiltersDTO):Observable<any>{
  return this.httpClient.get<InvoiceGetDTO>('http://localhost/Hms/api/Invoice?guestName='+invoiceFilters.guestName+'&roomType='+
    invoiceFilters.roomType+'&paymentStatus='+invoiceFilters.paymentStatus);
  }

  LoadOne(id:number):Observable<any>{
    return this.httpClient.get<InvoiceGetDTO>('http://localhost/Hms/api/Invoice/' + id);
    }

    GenerateInvoice(invoice:InvoicePostDTO):Observable<any>{
      return this.httpClient.post<any>('http://localhost/Hms/api/Invoice/GenerateInvoice', invoice);
      }

      Delete(id:number):Observable<any>{
        return this.httpClient.delete<any>('http://localhost/Hms/api/Invoice/' + id);
        }

        Update(invoice:InvoicePostDTO):Observable<any>{
          return this.httpClient.put<any>('http://localhost/Hms/api/Invoice', invoice);
          }

          
}

