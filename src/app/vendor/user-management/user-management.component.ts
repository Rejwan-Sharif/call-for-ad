import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AdManagementService } from '../ad-management.service';
import { AdManagement } from '../ad-management';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent {
  title:any;
  location:any;
  type:any;
  status:any;
  height:any;
  width:any;
  area:any;
  purpose:any;
  facing:any;
  price:any;
  title_image:any;
  second_image:any;
  third_image:any;
  fourth_image:any;
  final_image:any;
  other_details:any;
  adStatus:any;
  promotionStatus:any;
  ad:any;

  ads : AdManagement = new AdManagement();
  constructor(private router : Router, private  adService: AdManagementService, private route: ActivatedRoute){
    if(localStorage.getItem('email')==null){
      this.router.navigate(['login'])
    }
  }
   ngOnInit(){
    this.showAdData();
   }
  showAdData() {
    let vendorId = localStorage.getItem('id');
    this.adService.showAd(vendorId).subscribe(response =>{
      this.ad = response;
    })
  }

  gotoPromotion(adId:any){
    console.log(adId);
    this.router.navigate(['promote-ad',adId])
  }

logout(){
  localStorage.removeItem('email');
   this.router.navigate(['login']);
}

updateAdByID(adId:any){
 this.router.navigate(['ad-update',adId])
}

deleteAd(adId:any){
  this.adService.removeAd(adId).subscribe(data => {
    alert("Delete Ad Successful!");
     this.showAdData()});
}

}
