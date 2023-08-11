import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdManagementService } from '../ad-management.service';
import { PromotionService } from '../promotion.service';

@Component({
  selector: 'app-vendor-header',
  templateUrl: './vendor-header.component.html',
  styleUrls: ['./vendor-header.component.css']
})
export class VendorHeaderComponent {

  constructor(private router : Router, private  adService: AdManagementService, private service: PromotionService, private route: ActivatedRoute){
    if(localStorage.getItem('email')==null){
      this.router.navigate(['login'])
    }
  }

  logout(){
   localStorage.removeItem('email');
   this.router.navigate(['login']);   
  }

}
