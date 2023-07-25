import { Component } from '@angular/core';
import { Vendorsignup } from '../vendorsignup';
import { Router } from '@angular/router';

import { VendorManageService } from '../vendor-manage.service';

@Component({
  selector: 'app-vendor-register',
  templateUrl: './vendor-register.component.html',
  styleUrls: ['./vendor-register.component.css']
})
export class VendorRegisterComponent {
 vs: Vendorsignup = new Vendorsignup();

 constructor(private router : Router, private mains: VendorManageService){}
 
 vendorsave(){
 this.mains.vendorDataSave(this.vs).subscribe(data => {
  console.log(data);
  if(data  == null) {
  alert("Data saved successfully");
  this.router.navigate(['login']);
  }else{
    alert("Something went wrong");
  }
 });

}
}