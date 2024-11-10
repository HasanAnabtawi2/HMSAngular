import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserGetDTO } from '../DTOs/UserGetDTO';
import { RoleDTO } from '../DTOs/RoleDTO';
import { Observable } from 'rxjs';
import { User } from '../DTOs/User';
import { __param } from 'tslib';
import { UserRole } from '../DTOs/User copy';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private httpClient:HttpClient)  {}
  
  

LoadAll():Observable<any>{
  return this.httpClient.get<RoleDTO>('http://localhost/Hms/api/Roles')
}

  ShowUsersInRole(roleName:string):Observable<any>{

    return this.httpClient.get<User>('http://localhost/Hms/api/Roles/GetUsersByRole/?roleName='+roleName)
   }

   AddUserToRole(userRole:UserRole):Observable<any>{
    return this.httpClient.post<any>('http://localhost/Hms/api/Roles/AddToRole?username='+userRole.username+'&roleName='+userRole.roleName,userRole)
   }

   RemoveFromRole(userRole:UserRole):Observable<any>{
    return this.httpClient.delete<any>('http://localhost/Hms/api/Roles/RemoveFromRole?username='+userRole.username+'&roleName='+userRole.roleName)
   }
   getUsersNotInRole(roleName:string):Observable<any>{

    return this.httpClient.get('http://localhost/Hms/api/User/GetUserNotInRole?roleName='+roleName)
   }






}
