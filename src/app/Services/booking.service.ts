import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { bookingGetDTO } from '../DTOs/bookingGetDTO';
import { bookingPostDTO } from '../DTOs/bookingPostDTO';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { bookingFiltersDTO } from '../DTOs/bookingFiltersDTO';
import { roomAvailabilityDTO } from '../DTOs/roomAvailability';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private httpClient:HttpClient) { }

  LoadAll(fliters:bookingFiltersDTO):Observable<any>{
  return this.httpClient.get<bookingGetDTO>('http://localhost/Hms/api/Booking?ExpectedCheckInDate='+fliters.expectedCheckInDate+'&ExpectedCheckOutDate='+
    fliters.expectedCheckOutDate+
    '&guestName='+fliters.guestName+'&room.Number='+fliters.roomNumber+'&Status='+fliters.status
  );
  }

  getRoomAvailability(startDate:string,roomType:string):Observable<any>{
    return this.httpClient.get<roomAvailabilityDTO>('http://localhost/Hms/api/Booking/GetAllRoomAvailabilityForInterval?startDate='+startDate+'&roomType='+roomType );
    }

  

  LoadOne(id:number):Observable<any>{
    return this.httpClient.get<bookingGetDTO>('http://localhost/Hms/api/Booking/' + id);
    }

    Add(booking:bookingPostDTO):Observable<any>{
      return this.httpClient.post<any>('http://localhost/Hms/api/Booking', booking);
      }

      Delete(id:number):Observable<any>{
        return this.httpClient.delete<any>('http://localhost/Hms/api/Booking/' + id);
        }

        Update(booking:bookingPostDTO):Observable<any>{
          return this.httpClient.put<any>('http://localhost/Hms/api/Booking', booking);
          }




          CheckIn(bookingId:number):Observable<any>{

            return this.httpClient.post<any>('http://localhost/Hms/api/Booking/CehckIn',bookingId)

          }

          CheckOut(bookingId:number):Observable<any>{
            return this.httpClient.post<any>('http://localhost/Hms/api/Booking/CehckOut',bookingId)
          }

          CancelBooking(bookingId:number):Observable<any>{
            return this.httpClient.post<any>('http://localhost/Hms/api/Booking/CancelBooking',bookingId)
          }

}
