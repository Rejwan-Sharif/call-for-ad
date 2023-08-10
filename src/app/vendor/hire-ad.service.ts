import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HireAd } from './hire-ad';
import { Observable } from 'rxjs';

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

  public getHireData():Observable<HireAd[]>{
     this.baseUrl =  'http://localhost:8080/getHireAd';
    return this.client.get<HireAd[]>(this.baseUrl);
  }
   
}
