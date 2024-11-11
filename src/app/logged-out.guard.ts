import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';
import { inject } from '@angular/core'; 

export const loggedOutGuard: CanActivateFn = (route, state) => {
  
  const router=inject(Router)
  
  if(!localStorage.getItem('SecurityToken')){
    router.navigate(['/'])
    return false;}
    else{
  
      
      
      return true
    }
};
