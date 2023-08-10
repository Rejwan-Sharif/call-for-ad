import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Promotion } from './promotion';
import { Observable } from 'rxjs';
import { Mail } from './mail';

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

  getPromoById(adId :any){
    this.baseUrl = "http://localhost:8080/getPromoById/" + adId;
    return this.client.get(this.baseUrl);
  }

  // sendMail(email  :Mail){
  // this.baseUrl = "http://localhost:8080/mail";
  // return this.client.post(this.baseUrl, email);
  // }

}
