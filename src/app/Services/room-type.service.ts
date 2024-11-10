import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { roomTypeDTO } from '../DTOs/RoomTypeDTO';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomTypeService {


  constructor(private httpClient:HttpClient) { }

  LoadAll():Observable<any>{
  return this.httpClient.get<roomTypeDTO>('http://localhost/Hms/api/RoomType')
  }

  LoadOne(id:number):Observable<any>{
    return this.httpClient.get<roomTypeDTO>('http://localhost/Hms/api/RoomType/' + id);
    }

    Add(roomType:roomTypeDTO):Observable<any>{
      return this.httpClient.post<any>('http://localhost/Hms/api/RoomType', roomType);
      }

      Delete(id:number):Observable<any>{
        return this.httpClient.delete<any>('http://localhost/Hms/api/RoomType/' + id);
        }

        Update(roomType:roomTypeDTO):Observable<any>{
          return this.httpClient.put<any>('http://localhost/Hms/api/RoomType', roomType);
          }

}
