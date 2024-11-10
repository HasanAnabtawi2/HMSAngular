import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/DTOs/User';
import { UserRole } from 'src/app/DTOs/User copy';
import { RoleService } from 'src/app/Services/role.service';

@Component({
  selector: 'app-remove-user-from-role',
  templateUrl: './remove-user-from-role.component.html',
  styleUrls: ['./remove-user-from-role.component.css']
})
export class RemoveUserFromRoleComponent implements OnChanges {




  constructor(private roleService:RoleService,private formBuilder:FormBuilder){
   
    
  }



  form!:FormGroup;

  @Input({required:true}) selectedRoleName!:string 

  users!:User[]




  ngOnChanges(changes: SimpleChanges): void {
    this.roleService.ShowUsersInRole(this.selectedRoleName).subscribe({
      next:resData=>this.users=resData
    })
    this.form=this.formBuilder.group({
      selectUser:['',Validators.required]
    })

    
  }





useRole!:UserRole;
  onSubmit(){

    if(this.form.valid){

    this.useRole={  
      roleName: this.selectedRoleName,
  username: this.form.value.selectUser,

    }
    
    this.roleService.RemoveFromRole(this.useRole).subscribe();
    window.location.reload();
  }
  

}

}


