import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { guestDTO } from '../DTOs/GuestDTO';
import { Observable } from 'rxjs';
import { guestFiltersDTO } from '../DTOs/guestFilters';

@Injectable({
  providedIn: 'root'
})
export class GuestService {

  constructor(private httpClient:HttpClient) { }

  LoadAll(guestFilter:guestFiltersDTO):Observable<any>{
  return this.httpClient.get<guestDTO>('http://localhost/Hms/api/Guest?guestName='+guestFilter.guestName
    +'&contactNumber='+guestFilter.contactNumber+'&documentNumber='+guestFilter.documentNumber
  + '&email='+guestFilter.email);
  }

  LoadOne(id:number):Observable<any>{
    return this.httpClient.get<guestDTO>('http://localhost/Hms/api/Guest/' + id);
    }

    Add(guest:guestDTO):Observable<any>{
      return this.httpClient.post<any>('http://localhost/Hms/api/Guest', guest);
      }

      Delete(id:number):Observable<any>{
        return this.httpClient.delete<any>('http://localhost/Hms/api/Guest/' + id);
        }

        Update(guest:guestDTO):Observable<any>{
          return this.httpClient.put<any>('http://localhost/Hms/api/Guest', guest);
          }
}
