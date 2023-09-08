import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ShowData } from './show-data';
import { Observable } from 'rxjs';
import { QuotationRequest } from './quotation-request';

@Injectable({
  providedIn: 'root'
})
export class ShowDataService {

  private baseUrl = 'http://localhost:8080';
  constructor(private client: HttpClient) { }

  getAllAd():Observable<ShowData[]> {
    this.baseUrl = 'http://localhost:8080/showAllData';
    return this.client.get<ShowData[]>(this.baseUrl);
  }

  getDetailAd(id :number ): Observable<ShowData> {
    this.baseUrl = 'http://localhost:8080/ad/'+id;
    return this.client.get(this.baseUrl);
    }

    sendQuotation(quotRequest:QuotationRequest){
    this.baseUrl = 'http://localhost:8080/sendQuotation'
      return this.client.post(this.baseUrl,quotRequest);
    }
    
    getProAd():Observable<ShowData[]> {
      this.baseUrl = 'http://localhost:8080/showProAd';
      return this.client.get<ShowData[]>(this.baseUrl);
    }
    
  
}
