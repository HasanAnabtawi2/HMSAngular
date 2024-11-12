import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { DashboardDTO } from '../DTOs/DasboardDTo';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DasboardService {

  baseUrl!:string
  constructor(private httpClient:HttpClient) { 

    this.baseUrl=environment.APIUrl
  }

  dashboardReport():Observable<any>{

    return this.httpClient.get<DashboardDTO>(this.baseUrl+'Dashboard', );
  }
}
