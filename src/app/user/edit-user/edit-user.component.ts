import { formatDate } from '@angular/common';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/DTOs/User';
import { AccountService } from 'src/app/Services/account.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit,OnChanges {

constructor(private formBuilder:FormBuilder,private accountService:AccountService)
{

}



  form!:FormGroup;

  @Input({required:true}) selectedUser!:string

  ngOnInit(): void {
  

    this.form=this.formBuilder.group({
      'txtUsername':['',Validators.required],
      'txtName':['',Validators.required],
      'txtEmail':['',Validators.required],
      'dateDOB':['',Validators.required],

     
     

          
  });

  }

  user!:User

  ngOnChanges(): void {

    debugger
    if(this.selectedUser!=undefined){
    this.accountService.getUserByUsername(this.selectedUser).subscribe({
      next:resData=>{
        this.user=resData;
        this.form.controls['txtUsername'].setValue(this.user.username)
        this.form.controls['txtEmail'].setValue(this.user.email)
        this.form.controls['txtName'].setValue(this.user.name)
        this.form.controls['dateDOB'].setValue(formatDate(this.user.dob,'yyyy-MM-dd', 'en-US'))
        
      }
    })



   
    
  }
}


onSubmit()
{

  this.user={
    dob:this.form.value.dateDOB,
    email:this.form.value.txtEmail,
    username:this.form.value.txtUsername,
    name:this.form.value.txtName,
  }

  this.accountService.updateUserInformation(this.user).subscribe({

    next:()=>{
     
    }
    ,complete:()=>{
      
    }
      
  });
  
  


  window.location.reload()

}


}
