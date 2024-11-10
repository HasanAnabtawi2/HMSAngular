import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { RoleDTO } from 'src/app/DTOs/RoleDTO';
import { User } from 'src/app/DTOs/User';
import { UserGetDTO } from 'src/app/DTOs/UserGetDTO';
import { RoleService } from 'src/app/Services/role.service';

@Component({
  selector: 'app-show-users-in-role',
  templateUrl: './show-users-in-role.component.html',
  styleUrls: ['./show-users-in-role.component.css']
})
export class ShowUsersInRoleComponent implements OnChanges {

  constructor(private roleService:RoleService){

  }

  @Input({required:true}) selectedRoleName!:string;

  ngOnChanges(changes: SimpleChanges): void {
    debugger
    this.roleService.ShowUsersInRole(this.selectedRoleName).subscribe({
      next:data=>this.usersInRole=data
    })
  }


  usersInRole!:User[];



  ngOnInit(): void {
  
  
  }





    
    

  

 



}
