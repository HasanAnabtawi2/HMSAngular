import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
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

      'txtPassword':['',Validators.compose([Validators.required,Validators.minLength(8),Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/)])],
      'txtConfirmPassword':['',Validators.required],
     

          
  },
  { validators: this.passwordMatchValidator()}
  );


  }






   passwordMatchValidator(): ValidatorFn  {
    return (control: AbstractControl ): ValidationErrors | null => {
      const password = control.get('txtPassword')?.value;
      const confirmPassword = control.get('txtConfirmPassword')?.value;
      return password &&
        confirmPassword &&
        password !== confirmPassword
        ? { 'passwordMismatch': true }
        : null;
    };
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

    if(this.form.valid){


    this.accountService.signUp(this.user).subscribe({

      next:()=>{
        window.location.reload()
      }
    })

  }



  }
}

