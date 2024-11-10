import { Injectable } from '@angular/core';
import { roomGetDTO } from '../DTOs/RoomGetDTO';
import { roomPostDTO } from '../DTOs/RoomPostDTO';
import { HttpClient } from '@angular/common/http';
import { Observable, filter } from 'rxjs';
import { roomFiltersDTO } from '../DTOs/roomFilters';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private httpClient:HttpClient) { }

  LoadAll(filters:roomFiltersDTO):Observable<any>{
  return this.httpClient.get<roomGetDTO>('http://localhost/Hms/api/Room?roomNumber='+filters.roomNumber+
    '&roomType='+filters.roomType+'&Status='+filters.status
  );
  }

  LoadOne(id:number):Observable<any>{
    return this.httpClient.get<roomGetDTO>('http://localhost/Hms/api/Room/' + id);
    }

    Add(room:roomPostDTO):Observable<any>{
      return this.httpClient.post<any>('http://localhost/Hms/api/Room', room);
      }

      Delete(id:number):Observable<any>{
        return this.httpClient.delete<roomPostDTO>('http://localhost/Hms/api/Room/' + id);
        }

        Update(room:roomPostDTO):Observable<any>{
          return this.httpClient.put<any>('http://localhost/Hms/api/Room', room);
          }
        }
