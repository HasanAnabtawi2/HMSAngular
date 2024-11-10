import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserPostDTO } from 'src/app/DTOs/UserPostDTO';
import { AccountService } from 'src/app/Services/account.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  
  
  constructor(private formBuilder:FormBuilder,private accountService:AccountService){
    
  }
  form!:FormGroup
  
  ngOnInit(): void {
  

    this.form=this.formBuilder.group({
      'txtUsername':['',Validators.required],
      'txtName':['',Validators.required],
      'txtEmail':['',Validators.required],
      'dateDOB':['',Validators.required],

      'txtPassword':['',Validators.required],
     

          
  });


  }





    
user!:UserPostDTO


  onSubmit(){
debugger

    this.user={
      password: this.form.value.txtPassword,
      username: this.form.value.txtUsername,
      name: this.form.value.txtName,
      email: this.form.value.txtEmail,
      dob: this.form.value.dateDOB
      
    }


    this.accountService.signUp(this.user).subscribe({

      next:()=>{
        window.location.reload()
      }
    })




  }
}

