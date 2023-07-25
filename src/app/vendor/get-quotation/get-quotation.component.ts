import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdManagementService } from '../ad-management.service';
import { QuotationRequest } from 'src/app/main/quotation-request';
import { ShowData } from 'src/app/main/show-data';

@Component({
  selector: 'app-get-quotation',
  templateUrl: './get-quotation.component.html',
  styleUrls: ['./get-quotation.component.css']
})

export class GetQuotationComponent {


  constructor(private router : Router, private  adService: AdManagementService, private route: ActivatedRoute){
    if(localStorage.getItem('email')==null){
      this.router.navigate(['login'])
    }
  }

  qm:any;
  quotationId:any;
  
  ngOnInit(){
    this.showQuotation();
  }

 showQuotation(){
  let vendorId = localStorage.getItem('id');
  this.adService.getQuotations(vendorId).subscribe(data=>{
    this.qm = data;
  });
 }

 viewFullQuotation(quotationId:any){
    this.router.navigate(['view-details',quotationId]);
 }
 

}
