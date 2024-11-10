import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../Services/account.service';
import { LoginDTO } from '../DTOs/LoginDTO';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


constructor(private formBuilder:FormBuilder,private accountService:AccountService,private router:Router){

}

  form!:FormGroup

  ngOnInit(){

    this.form=this.formBuilder.group({
      txtUsername:['',Validators.required],
      txtPassword:['',Validators.required]
    })
  }

  loginDto!:LoginDTO
  
  signIn(){
    debugger
    this.loginDto={
      username:this.form.value.txtUsername,
      password:this.form.value.txtPassword

    }
    this.accountService.signIn(this.loginDto).subscribe(
      {
        next:resData=>{

          localStorage.setItem("SecurityToken",resData.token);
          

          this.accountService.getUserRoles(this.form.value.txtUsername).subscribe({
      
            next:resData=>{
              localStorage.setItem("userRoles",resData)
            }
            ,complete:()=>{
              this.router.navigate(['/home'])
            }
      
          })
         

        },
        error:()=>{
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Username or Password Is Invalid",
            
          });
        }
      }

    );

  

  }

}
