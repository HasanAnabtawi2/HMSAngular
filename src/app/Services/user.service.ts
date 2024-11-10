import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserGetDTO } from '../DTOs/UserGetDTO';
import { UserPostDTO } from '../DTOs/UserPostDTO';
import { User } from '../DTOs/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) {
  }

    LoadAll():Observable<any>{
      return this.httpClient.get<UserGetDTO>('http://localhost/Hms/api/User');

      
    }

    Add(user:UserPostDTO):Observable<any>{
      return this.httpClient.post<any>('http://localhost/Hms/api/User',user);

      
    }


    Delete(username:string):Observable<any>{
      return this.httpClient.delete<any>('http://localhost/Hms/api/User?username='+username);

      
    }




   
}
