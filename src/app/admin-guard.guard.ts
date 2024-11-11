import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';
import { inject } from '@angular/core'; 

export const adminGuard: CanActivateFn = (route, state) => {

  const router=inject(Router)

  if(localStorage.getItem('userRoles')=='Admin'){
    
    return true;
  }
  else{

    router.navigate(['/home'])
   

    return false
  }
};
