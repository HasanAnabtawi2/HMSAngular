import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserRole } from 'src/app/DTOs/User copy';
import { UserGetDTO } from 'src/app/DTOs/UserGetDTO';
import { RoleService } from 'src/app/Services/role.service';

@Component({
  selector: 'app-add-user-to-role',
  templateUrl: './add-user-to-role.component.html',
  styleUrls: ['./add-user-to-role.component.css']
})
export class AddUserToRoleComponent implements OnChanges {


  constructor(private roleService:RoleService,private users:RoleService,private formBuilder:FormBuilder){
   
    
  }


  form!:FormGroup;
  usersNotInRole!:UserGetDTO[]

  @Input({required:true}) selectedRoleName!:string 


  ngOnChanges(): void {
    
    this.roleService.getUsersNotInRole(this.selectedRoleName).subscribe({
      next:resData=>{this.usersNotInRole=resData}
    })

    this.form=this.formBuilder.group({
      selectUser:['',Validators.required]
    })


  }


  



userRole!:UserRole

  onSubmit(){

    
this.userRole={
  username:this.form.value.selectUser,
  roleName:this.selectedRoleName
}
    this.roleService.AddUserToRole(this.userRole).subscribe();

    window.location.reload()
  }

  

}
