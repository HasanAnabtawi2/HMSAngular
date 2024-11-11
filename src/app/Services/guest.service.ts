import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { guestDTO } from '../DTOs/GuestDTO';
import { Observable } from 'rxjs';
import { guestFiltersDTO } from '../DTOs/guestFilters';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class GuestService {

  baseUrl!:string
  constructor(private httpClient:HttpClient) { 

    this.baseUrl=environment.APIUrl
  }

  LoadAll(guestFilter:guestFiltersDTO):Observable<any>{
  return this.httpClient.get<guestDTO>(this.baseUrl+'Guest?guestName='+guestFilter.guestName
    +'&contactNumber='+guestFilter.contactNumber+'&documentNumber='+guestFilter.documentNumber
  + '&email='+guestFilter.email);
  }

  LoadOne(id:number):Observable<any>{
    return this.httpClient.get<guestDTO>(this.baseUrl+'Guest/' + id);
    }

    Add(guest:guestDTO):Observable<any>{
      return this.httpClient.post<any>(this.baseUrl+'Guest', guest);
      }

      Delete(id:number):Observable<any>{
        return this.httpClient.delete<any>(this.baseUrl+'Guest/' + id);
        }

        Update(guest:guestDTO):Observable<any>{
          return this.httpClient.put<any>(this.baseUrl+'Guest', guest);
          }
}
