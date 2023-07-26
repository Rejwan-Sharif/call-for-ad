import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdManagementService } from '../ad-management.service';
import { AdManagement } from '../ad-management';
import { Promotion } from '../promotion';
import { PromotionService } from '../promotion.service';

@Component({
  selector: 'app-promote-ad',
  templateUrl: './promote-ad.component.html',
  styleUrls: ['./promote-ad.component.css']
})
export class PromoteAdComponent {

  ads = new AdManagement();
  promo = new Promotion();

  type: string='';
  subTotal:number =0;
  vat:number =0;
  total = 0;

  constructor(private router : Router, private  adService: AdManagementService, private service: PromotionService, private route: ActivatedRoute){
    if(localStorage.getItem('email')==null){
      this.router.navigate(['login'])
    }
  }
  
  ngOnInit() {
    let adId = this.route.snapshot.params['adId'];
    this.adService.getAdID(adId).subscribe(data=>{
      this.ads = data;
    })
  }

 selectPromo(type:any){
  this.type = type;
  if(type == 'Platinum'){
    this.subTotal = 1050;
  }else if(type=='Gold'){
    this.subTotal = 750;
  }else{
    this.subTotal =550;
  }
  this.vat = this.subTotal *.07;
  this.total = this.subTotal + this.vat;
 }

 insertPromotion(){
  this.promo.adId = this.route.snapshot.params['adId'];
  this.promo.promotionCategory = this.type;
  this.promo.subTotal = this.subTotal;
  this.promo.total = this.total;
  this.promo.vat = this.vat;
  this.service.postPromotion(this.promo).subscribe(data=>{
    alert("Your promotion has been  confirmed");
  })
 }
  
   

}
