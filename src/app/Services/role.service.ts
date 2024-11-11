import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserGetDTO } from '../DTOs/UserGetDTO';
import { RoleDTO } from '../DTOs/RoleDTO';
import { Observable } from 'rxjs';
import { User } from '../DTOs/User';
import { __param } from 'tslib';
import { UserRole } from '../DTOs/User copy';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  baseUrl!:string
  constructor(private httpClient:HttpClient) { 

    this.baseUrl=environment.APIUrl
  }

LoadAll():Observable<any>{
  return this.httpClient.get<RoleDTO>(this.baseUrl+'Roles')
}

  ShowUsersInRole(roleName:string):Observable<any>{

    return this.httpClient.get<User>(this.baseUrl+'Roles/GetUsersByRole/?roleName='+roleName)
   }

   AddUserToRole(userRole:UserRole):Observable<any>{
    return this.httpClient.post<any>(this.baseUrl+'Roles/AddToRole?username='+userRole.username+'&roleName='+userRole.roleName,userRole)
   }

   RemoveFromRole(userRole:UserRole):Observable<any>{
    return this.httpClient.delete<any>(this.baseUrl+'Roles/RemoveFromRole?username='+userRole.username+'&roleName='+userRole.roleName)
   }
   getUsersNotInRole(roleName:string):Observable<any>{

    return this.httpClient.get(this.baseUrl+'User/GetUserNotInRole?roleName='+roleName)
   }






}
