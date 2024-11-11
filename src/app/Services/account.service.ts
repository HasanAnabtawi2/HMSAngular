import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginDTO } from '../DTOs/LoginDTO';
import { Observable } from 'rxjs';
import { User } from '../DTOs/User';
import { UserPostDTO } from '../DTOs/UserPostDTO';
import { updatePasswordDTO } from '../DTOs/UpdatePasswordDTO';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  baseUrl!:string
  constructor(private httpClient:HttpClient) { 

    this.baseUrl=environment.APIUrl
  }

  signIn(loginDTO:LoginDTO):Observable<any>{

    return this.httpClient.post<any>(this.baseUrl+'User/SignIn', loginDTO);
  }


  signUp(signUp:UserPostDTO):Observable<any>{

    return this.httpClient.post<any>(this.baseUrl+'User/SignUp', signUp);

  }

  getUserRoles(username:string):Observable<any>{

    return this.httpClient.get(this.baseUrl+'User/GetUserRoles?name='+username);
  }

  getUserByUsername(username?:string):Observable<any>{

    return this.httpClient.get(this.baseUrl+'User/GetUserByName?name='+username);

  }

  updateUserInformation(user:User){

    return this.httpClient.put<any>(this.baseUrl+'User/UpdateUserInformation?userName='+user.username,user);
  }


  updatePassword(passwordUpdate:updatePasswordDTO){

    return this.httpClient.post<any>(this.baseUrl+'User/ChangeUserPassword',passwordUpdate);
  }


  logout(){

    localStorage.removeItem('SecurityToken');
    localStorage.removeItem('userRoles')
}

}
