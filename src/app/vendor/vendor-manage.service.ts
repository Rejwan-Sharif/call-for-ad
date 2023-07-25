import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vendorsignup } from './vendorsignup';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class VendorManageService {


  private baseUrl = 'http://localhost:8080';

  constructor(private client : HttpClient) { }
// Vendor registration API  Method
  vendorDataSave(vendorsignup : Vendorsignup){
    this.baseUrl = 'http://localhost:8080/vendorSignUp';
    return this.client.post(this.baseUrl,vendorsignup);
  }

// Vendor  Login API Method
  vendorLogin(vendors : Vendorsignup): Observable<Vendorsignup> {
    this.baseUrl = 'http://localhost:8080/vendorlogin';
    return this.client.post<Vendorsignup>(this.baseUrl,vendors);
} 
}