import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InvoiceGetDTO } from '../DTOs/InvoiceGetDTO';
import { InvoicePostDTO } from '../DTOs/InvoicePostDTO';
import { invoiceFiltersDTO } from '../DTOs/InvoiceFiltersDTO copy';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class InvoicesService {

  baseUrl!:string
  constructor(private httpClient:HttpClient) { 

    this.baseUrl=environment.APIUrl
  }

  LoadAll(invoiceFilters:invoiceFiltersDTO):Observable<any>{
  return this.httpClient.get<InvoiceGetDTO>(this.baseUrl+'Invoice?guestName='+invoiceFilters.guestName+'&roomType='+
    invoiceFilters.roomType+'&paymentStatus='+invoiceFilters.paymentStatus);
  }

  LoadOne(id:number):Observable<any>{
    return this.httpClient.get<InvoiceGetDTO>(this.baseUrl+'Invoice/' + id);
    }

    GenerateInvoice(invoice:InvoicePostDTO):Observable<any>{
      return this.httpClient.post<any>(this.baseUrl+'Invoice/GenerateInvoice', invoice);
      }

      Delete(id:number):Observable<any>{
        return this.httpClient.delete<any>(this.baseUrl+'Invoice/' + id);
        }

        Update(invoice:InvoicePostDTO):Observable<any>{
          return this.httpClient.put<any>(this.baseUrl+'Invoice', invoice);
          }

          
}

