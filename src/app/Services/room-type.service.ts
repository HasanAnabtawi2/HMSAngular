import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { roomTypeDTO } from '../DTOs/RoomTypeDTO';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class RoomTypeService {

  baseUrl!:string
  constructor(private httpClient:HttpClient) { 

    this.baseUrl=environment.APIUrl
  }
  LoadAll():Observable<any>{
  return this.httpClient.get<roomTypeDTO>(this.baseUrl+'RoomType')
  }

  LoadOne(id:number):Observable<any>{
    return this.httpClient.get<roomTypeDTO>(this.baseUrl+'RoomType/' + id);
    }

    Add(roomType:roomTypeDTO):Observable<any>{
      return this.httpClient.post<any>(this.baseUrl+'RoomType', roomType);
      }

      Delete(id:number):Observable<any>{
        return this.httpClient.delete<any>(this.baseUrl+'RoomType/' + id);
        }

        Update(roomType:roomTypeDTO):Observable<any>{
          return this.httpClient.put<any>(this.baseUrl+'RoomType', roomType);
          }

}
