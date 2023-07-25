import { Component } from '@angular/core';
import { AdManagement } from '../ad-management';
import { Router } from '@angular/router';
import { AdManagementService } from '../ad-management.service';

@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.css']
})
export class PostAddComponent {
 ps : AdManagement = new AdManagement();

 constructor(private router: Router, private adService: AdManagementService){
  if(localStorage.getItem('email')==null){
    this.router.navigate(['login'])
  }
 }
 

 
 adSubmit(){
    this.ps.vendorId = localStorage.getItem('id');
    this.adService.postAd(this.ps).subscribe(Data => {
      console.log(Data);
      alert("Success");
      this.router.navigate(['vendor']);
    });

 }

}
