import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminOperationService } from 'src/app/admin/admin-operation.service';
import { ViewAllDetails } from 'src/app/admin/view-all-details';
import { AdManagement } from '../ad-management';
import { AdManagementService } from '../ad-management.service';

@Component({
  selector: 'app-ad-update',
  templateUrl: './ad-update.component.html',
  styleUrls: ['./ad-update.component.css']
})
export class AdUpdateComponent {

  ads : AdManagement = new AdManagement();
  constructor(private router : Router, private  adService: AdManagementService, private route: ActivatedRoute){
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

  adUpdate(){
    this.adService.updateAd(this.ads).subscribe(data=>{
      console.log(data);
      alert("Success!!")
      this.router.navigate(['vendor']);
    })
  }

}
