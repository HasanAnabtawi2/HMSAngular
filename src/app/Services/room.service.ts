import { Injectable } from '@angular/core';
import { roomGetDTO } from '../DTOs/RoomGetDTO';
import { roomPostDTO } from '../DTOs/RoomPostDTO';
import { HttpClient } from '@angular/common/http';
import { Observable, filter } from 'rxjs';
import { roomFiltersDTO } from '../DTOs/roomFilters';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  baseUrl!:string
  constructor(private httpClient:HttpClient) { 

    this.baseUrl=environment.APIUrl
  }

  LoadAll(filters:roomFiltersDTO):Observable<any>{
  return this.httpClient.get<roomGetDTO>(this.baseUrl+'Room?roomNumber='+filters.roomNumber+
    '&roomType='+filters.roomType+'&Status='+filters.status
  );
  }

  LoadOne(id:number):Observable<any>{
    return this.httpClient.get<roomGetDTO>(this.baseUrl+'Room/' + id);
    }

    Add(room:roomPostDTO):Observable<any>{
      return this.httpClient.post<any>(this.baseUrl+'Room', room);
      }

      Delete(id:number):Observable<any>{
        return this.httpClient.delete<roomPostDTO>(this.baseUrl+'Room/' + id);
        }

        Update(room:roomPostDTO):Observable<any>{
          return this.httpClient.put<any>(this.baseUrl+'Room', room);
          }
        }
