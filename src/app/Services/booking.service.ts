import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { bookingGetDTO } from '../DTOs/bookingGetDTO';
import { bookingPostDTO } from '../DTOs/bookingPostDTO';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { bookingFiltersDTO } from '../DTOs/bookingFiltersDTO';
import { roomAvailabilityDTO } from '../DTOs/roomAvailability';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  baseUrl!:string
  constructor(private httpClient:HttpClient) { 

    this.baseUrl=environment.APIUrl
  }

  LoadAll(fliters:bookingFiltersDTO):Observable<any>{
  return this.httpClient.get<bookingGetDTO>(this.baseUrl+'Booking?ExpectedCheckInDate='+fliters.expectedCheckInDate+'&ExpectedCheckOutDate='+
    fliters.expectedCheckOutDate+
    '&guestName='+fliters.guestName+'&room.Number='+fliters.roomNumber+'&Status='+fliters.status
  );
  }

  getRoomAvailability(startDate:string,roomType:string):Observable<any>{
    return this.httpClient.get<roomAvailabilityDTO>(this.baseUrl+'Booking/GetAllRoomAvailabilityForInterval?startDate='+startDate+'&roomType='+roomType );
    }

  

  LoadOne(id:number):Observable<any>{
    return this.httpClient.get<bookingGetDTO>(this.baseUrl+'Booking/' + id);
    }

    Add(booking:bookingPostDTO):Observable<any>{
      return this.httpClient.post<any>(this.baseUrl+'Booking', booking);
      }

      Delete(id:number):Observable<any>{
        return this.httpClient.delete<any>(this.baseUrl+'Booking/' + id);
        }

        Update(booking:bookingPostDTO):Observable<any>{
          return this.httpClient.put<any>(this.baseUrl+'Booking', booking);
          }




          CheckIn(bookingId:number):Observable<any>{

            return this.httpClient.post<any>(this.baseUrl+'Booking/CehckIn',bookingId)

          }

          CheckOut(bookingId:number):Observable<any>{
            return this.httpClient.post<any>(this.baseUrl+'Booking/CehckOut',bookingId)
          }

          CancelBooking(bookingId:number):Observable<any>{
            return this.httpClient.post<any>(this.baseUrl+'api/Booking/CancelBooking',bookingId)
          }

}
