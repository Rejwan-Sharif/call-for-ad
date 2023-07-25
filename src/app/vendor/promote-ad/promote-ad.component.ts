import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdManagementService } from '../ad-management.service';

@Component({
  selector: 'app-promote-ad',
  templateUrl: './promote-ad.component.html',
  styleUrls: ['./promote-ad.component.css']
})
export class PromoteAdComponent {

  constructor(private router : Router, private  adService: AdManagementService, private route: ActivatedRoute){
    if(localStorage.getItem('email')==null){
      this.router.navigate(['login'])
    }
  }

 

}
