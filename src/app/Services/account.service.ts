import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginDTO } from '../DTOs/LoginDTO';
import { Observable } from 'rxjs';
import { User } from '../DTOs/User';
import { UserPostDTO } from '../DTOs/UserPostDTO';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private httpClient:HttpClient) { 

  }

  signIn(loginDTO:LoginDTO):Observable<any>{

    return this.httpClient.post<any>('http://localhost/Hms/api/User/SignIn', loginDTO);
  }


  signUp(signUp:UserPostDTO):Observable<any>{

    return this.httpClient.post<any>('http://localhost/Hms/api/User/SignUp', signUp);

  }

  getUserRoles(username:string):Observable<any>{

    return this.httpClient.get('http://localhost/Hms/api/User/GetUserRoles?name='+username);
  }

  getUserByUsername(username?:string):Observable<any>{

    return this.httpClient.get('http://localhost/Hms/api/User/GetUserByName?name='+username);

  }

  updateUserInformation(user:User){

    return this.httpClient.put<any>('http://localhost/Hms/api/User/UpdateUserInformation?userName='+user.username,user);
  }


  logout(){

    localStorage.removeItem('SecurityToken');
    localStorage.removeItem('userRoles')
}

}
