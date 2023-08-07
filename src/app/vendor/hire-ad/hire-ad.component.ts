import { Component } from '@angular/core';
import { HireAd } from '../hire-ad';
import { HireAdService } from '../hire-ad.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-hire-ad',
  templateUrl: './hire-ad.component.html',
  styleUrls: ['./hire-ad.component.css']
})
export class HireAdComponent {

  hire = new  HireAd();
  constructor(private route : ActivatedRoute, private router : Router, private service : HireAdService){
    if(localStorage.getItem('email')==null){
      this.router.navigate(['login'])
    }
  }
  
  saveHireAd(){
  this.hire.vendorId = localStorage.getItem('id');
  this.service.saveData(this.hire).subscribe(data=> {
    alert(" Data  Saved Success");
    this.router.navigate(['vendor']);
  })
  }



}
