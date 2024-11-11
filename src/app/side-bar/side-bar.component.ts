import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AccountService } from '../Services/account.service';
import { Router } from '@angular/router';
import { Menu } from './sideBarMenu';
import { User } from '../DTOs/User';
import { TranslateService } from '@ngx-translate/core';



@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit{

  role!:string
  
  userInfo:any={}
  userString!:any
  sidebarMunu:any=Menu
filteredMenu:any =[]

  constructor(private accountService:AccountService, private router:Router,private translateService:TranslateService){
   
   

  }
  ngOnInit(): void {
   
    debugger
    this.role=JSON.parse(JSON.stringify(localStorage.getItem('userRoles')))
    this.userString=localStorage.getItem("userInfo");
   this.userInfo=JSON.parse(this.userString)

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


  @ViewChild('selectLanguage ') selectLanguage!:ElementRef



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
