import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Promotion } from './promotion';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  private baseUrl = 'http://localhost:8080';

  constructor( private client: HttpClient) { }

  postPromotion(promotion : Promotion){
   this.baseUrl = 'http://localhost:8080/insertPromotion';
   return this.client.post(this.baseUrl,promotion);
  }

  viewPromo(): Observable<Promotion[]>{
    this.baseUrl = "http://localhost:8080/getPromoData";
   return this.client.get<Promotion[]>(this.baseUrl);
  }

}
