import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AdManagement } from './ad-management';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdManagementService {

  private baseUrl = 'http://localhost:8080';


  constructor(private client : HttpClient) { }
ngOnInit(){
  this.baseUrl = 'http://localhost:8080/getData';
}
  // Ad Post api methods

  postAd(admanage : AdManagement){
    this.baseUrl = 'http://localhost:8080/adData';
    return this.client.post(this.baseUrl,admanage);
  } 

  showAd(vendorId : any){
    this.baseUrl = 'http://localhost:8080/getData/'+vendorId;
    return this.client.get(this.baseUrl);
  }

  getAdID(adId: number):Observable<AdManagement>{
    this.baseUrl = 'http://localhost:8080/ad/' + adId;
    return this.client.get(this.baseUrl);
  }

  updateAd(AdManagement: AdManagement){
    this.baseUrl = 'http://localhost:8080/update';
    return this.client.post(this.baseUrl,AdManagement);
  }

  removeAd(adId:any){
    this.baseUrl = 'http://localhost:8080/delete/'+adId;
    return this.client.delete(this.baseUrl);
  }

  getQuotations(vendorId:any){
    this.baseUrl = 'http://localhost:8080/getQuotation/'+vendorId;
    return this.client.get(this.baseUrl);
  }

  getFullQuotation(quotationId:any){
    this.baseUrl = 'http://localhost:8080/getFullQuotation/'+quotationId;
    return this.client.get(this.baseUrl);
  }

  }


