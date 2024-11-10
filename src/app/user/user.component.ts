import { Component, OnInit } from '@angular/core';
import { UserGetDTO } from '../DTOs/UserGetDTO';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{


  constructor(private userService:UserService){

  }
  users!:UserGetDTO[]
  ngOnInit(): void {

      this.LoadAll()


  }

  LoadAll(){
    this.userService.LoadAll().subscribe({
      next:resData=>{
        this.users=resData
      }
    })
  }


  selectedUsername!:string
  selectUsername(username:string){
    debugger
    this.selectedUsername=username
  }



  



}
