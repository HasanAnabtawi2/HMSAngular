import { Component } from '@angular/core';
import { RoleDTO } from '../DTOs/RoleDTO';
import { RoleService } from '../Services/role.service';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent {

  constructor(private roleService:RoleService){

  }
  roles!:RoleDTO[];




  ngOnInit(): void {
    this.roleService.LoadAll().subscribe({
      next:data=>this.roles=data
    })
  }


  selectedRoleName!:string

  selectRole(name:string){
    debugger

    this.selectedRoleName=name

  }

}
