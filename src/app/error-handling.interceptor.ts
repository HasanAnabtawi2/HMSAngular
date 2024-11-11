import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Injectable()
export class ErrorHandlingInterceptor implements HttpInterceptor {

  constructor(private router:Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error:HttpErrorResponse)=>{
        debugger
        let msg='';
        switch(error.status){
            case 404:
            this.router.navigate(['/404'])
            break;
            case 401:
              this.router.navigate(['/401'])
            break;
            // case 403:
            //   this.router.navigate(['/403'])
            // break;
          

            case 500:
              this.router.navigate(['/500'])
            break;
            
            default:
              console.log(error.error['message'])
            Swal.fire({
              position: "center-end",
              icon: "error",
              title: error.error['message'],
              showConfirmButton: false,
              timer: 1500,
            });
            break;
        }
        return throwError(msg)
      })
    )
  }
}
