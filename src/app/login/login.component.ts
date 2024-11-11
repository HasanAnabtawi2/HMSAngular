import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../Services/account.service';
import { LoginDTO } from '../DTOs/LoginDTO';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { UserGetDTO } from '../DTOs/UserGetDTO';
import { User } from '../DTOs/User';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


constructor(private formBuilder:FormBuilder,private accountService:AccountService,private router:Router,private translateService:TranslateService){

}


@ViewChild('selectLanguage ') selectLanguage!:ElementRef
user!:User
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


              this.accountService.getUserByUsername(this.form.value.txtUsername).subscribe({
                next:resData=>{
                  localStorage.setItem("userInfo",JSON.stringify(resData))
                },
                complete:()=>{
                  this.router.navigate(['/home'])
                }
                }
              )
              
            }
      
          })
         

        },
        error:()=>{
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Username or Password Is Invalid",
            
          });
          this.router.navigate(['/']);
        }
      }

    );

  

  }

  onChangeLanguage(){

    let body=document.getElementsByTagName('body')[0]
    if(this.selectLanguage.nativeElement.value=='ar'){

      body.dir="rtl"
      this.translateService.use(this.selectLanguage.nativeElement.value)
    }
    else{
      body.dir='ltr'
      this.translateService.use('en')
    }
    
  }

}
