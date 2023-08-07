import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HireAd } from './hire-ad';

@Injectable({
  providedIn: 'root'
})
export class HireAdService {

  
  private baseUrl = 'http://localhost:8080';

  constructor(private client : HttpClient) { }

  public saveData(hire: HireAd){
    this.baseUrl = 'http://localhost:8080/hireAdInsert';
    return this.client.post(this.baseUrl,hire);
  }
   
}
