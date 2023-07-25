import { Component } from '@angular/core';
import { ShowData } from '../show-data';
import { ShowDataService } from '../show-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { QuotationRequest } from '../quotation-request';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent {
  
  id:any;
  vd :  ShowData = new ShowData();
  qr : QuotationRequest = new QuotationRequest();
  constructor(private adminService  : ShowDataService, private route : ActivatedRoute, private router : Router){}
  ngOnInit(){
    this.id = this.route.snapshot.params['id'];
    this.adminService.getDetailAd(this.id).subscribe(data=>{
    this.vd = data;
   });
  }

  sendQuotations(){
    
    this.qr.adId = this.id;
    this.qr.vendorId= this.vd.vendorId;
    this.adminService.sendQuotation(this.qr).subscribe(data=>{
      if(data !=null){
        alert("success");
        this.router.navigate(['view-data'])
      }else{
        alert("Somthings  went wrong");
      }
    });

  }

}
