import { Component, OnInit } from '@angular/core';
import { AccountService } from '../Services/account.service';
import { Router } from '@angular/router';
import { Menu } from './sideBarMenu';



@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit{

  role!:string
  

  sidebarMunu:any=Menu
filteredMenu:any =[]
  constructor(private accountService:AccountService, private router:Router){

   

  }
  ngOnInit(): void {
    debugger
    this.role=JSON.parse(JSON.stringify(localStorage.getItem('userRoles')))

    this.sidebarMunu.forEach((element:any) => 
      {
          const isInRole=element.roles.find((x:any)=>x==this.role)
      
          if(isInRole!=undefined){
              this.filteredMenu.push(element);
          }
      }
          
      );
  }

 
  logout(){
    this.accountService.logout()

    this.router.navigate([''])
  }













}
