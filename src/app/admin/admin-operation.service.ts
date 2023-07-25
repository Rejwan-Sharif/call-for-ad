import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AdminOperation } from './admin-operation';
import { Observable } from 'rxjs';
import { ViewAllDetails } from './view-all-details';


@Injectable({
  providedIn: 'root'
})
export class AdminOperationService {

  private baseUrl = 'http://localhost:8080';
  constructor(private client: HttpClient) { }


   authlogin( adminClass: AdminOperation): Observable<AdminOperation> {
    this.baseUrl = 'http://localhost:8080/adminLogin';
    return this.client.post<AdminOperation>(this.baseUrl, adminClass);
  }

  getAd():Observable<ViewAllDetails[]> {
    this.baseUrl = 'http://localhost:8080/showAdminData';
    return this.client.get<ViewAllDetails[]>(this.baseUrl);
  }

  getAdById(id:number): Observable<ViewAllDetails> {
  this.baseUrl = 'http://localhost:8080/adminAd/'+id;
  return this.client.get(this.baseUrl);
  }

  updateAdData(viewAllDetails:ViewAllDetails){
    this.baseUrl = 'http://localhost:8080/updateAdStatus';
    return this.client.post(this.baseUrl, viewAllDetails);
  }


}
