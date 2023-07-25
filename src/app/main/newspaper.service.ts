import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Newspaper } from './newspaper';
import { Observable } from 'rxjs';
import { ShowData } from './show-data';

@Injectable({
  providedIn: 'root'
})
export class NewspaperService {


  private  baseUrl  =  "http://localhost:8080";
  constructor(private client : HttpClient) { }

  dataInsert(newspaper : Newspaper){
    this.baseUrl = "http://localhost:8080/newspaperDataInsert";
   return this.client.post(this.baseUrl, newspaper);
  }

  getAllAd(): Observable<Newspaper[]> {
    this.baseUrl = "http://localhost:8080/showNewspaperAd";
    return this.client.get<Newspaper[]>(this.baseUrl);
  }

  viewFullAD(id:any) {
    this.baseUrl = "http://localhost:8080/viewAdDetails/"+id;
    return this.client.get(this.baseUrl);
  }

  updateStatus(newspaper : Newspaper){
    this.baseUrl = "http://localhost:8080/updateStatus";
    return this.client.post(this.baseUrl,newspaper);
  }

}
