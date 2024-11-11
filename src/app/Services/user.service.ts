import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserGetDTO } from '../DTOs/UserGetDTO';
import { UserPostDTO } from '../DTOs/UserPostDTO';
import { User } from '../DTOs/User';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl!:string
  constructor(private httpClient:HttpClient) { 

    this.baseUrl=environment.APIUrl
  }

    LoadAll():Observable<any>{
      return this.httpClient.get<UserGetDTO>(this.baseUrl+'User');

      
    }

    Add(user:UserPostDTO):Observable<any>{
      return this.httpClient.post<any>(this.baseUrl+'User',user);

      
    }


    Delete(username:string):Observable<any>{
      return this.httpClient.delete<any>(this.baseUrl+'User?username='+username);

      
    }




   
}
