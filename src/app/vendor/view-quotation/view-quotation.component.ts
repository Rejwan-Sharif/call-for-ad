import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdManagementService } from '../ad-management.service';
import { QuotationRequest } from 'src/app/main/quotation-request';

@Component({
  selector: 'app-view-quotation',
  templateUrl: './view-quotation.component.html',
  styleUrls: ['./view-quotation.component.css']
})
export class ViewQuotationComponent {

  constructor(private router: Router,private route : ActivatedRoute , private adService: AdManagementService){}
   qm = new QuotationRequest();

  ngOnInit(){
    let id = this.route.snapshot.params['quotationId'];
    this.adService.getFullQuotation(id).subscribe(data => {
      this.qm  = data;
    })
  }

}
