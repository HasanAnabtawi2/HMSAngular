import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { updatePasswordDTO } from 'src/app/DTOs/UpdatePasswordDTO';
import { User } from 'src/app/DTOs/User';
import { AccountService } from 'src/app/Services/account.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-password',
  templateUrl: './edit-password.component.html',
  styleUrls: ['./edit-password.component.css']
})
export class EditPasswordComponent implements OnInit {

constructor(private formBuilder:FormBuilder,private accountService:AccountService){}

userString!:any
userInfo:any={}

form1!:FormGroup
  ngOnInit(): void {
    this.userString=localStorage.getItem("userInfo");
   this.userInfo=JSON.parse(this.userString)

    this.form1=this.formBuilder.group({
      txtOldPassword:['',Validators.required],
      txtNewPassword:['',Validators.compose([Validators.required,Validators.minLength(8),Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/)])],
      txtConfirmNewPassword:['',Validators.required]
    },{validators:this.passwordMatchValidator()})


  }







  passwordMatchValidator(): ValidatorFn  {
    return (control: AbstractControl ): ValidationErrors | null => {
      const password = control.get('txtNewPassword')?.value;
      const confirmPassword = control.get('txtConfirmNewPassword')?.value;
      return password &&
        confirmPassword &&
        password !== confirmPassword
        ? { 'passwordMismatch': true }
        : null;
    };
  }



updatePassword!:updatePasswordDTO

  onSubmit(){
    debugger
    if(this.form1.valid){
    this.updatePassword={
      userName: this.userInfo.username ,
      currentPassword:this.form1.value.txtOldPassword,
      newPassword:this.form1.value.txtNewPassword
    }


    this.accountService.updatePassword(this.updatePassword).subscribe({
      next:()=>{

        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500
        });

      }
    })




  }


  }

}
