import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { jsPDF } from "jspdf";
import { PromotionService } from '../promotion.service';
import { Promotion } from '../promotion';
import autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-print-invoice',
  templateUrl: './print-invoice.component.html',
  styleUrls: ['./print-invoice.component.css']
})
export class PrintInvoiceComponent {

   
  
   promo = new  Promotion();
   constructor(private  router: Router, private service :PromotionService, private route: ActivatedRoute){}
    today = new Date();
   ngOnInit(){
    let today = new Date();
    let adId = this.route.snapshot.params['adId'];
    this.service.getPromoById(adId).subscribe(data=> this.promo=data);
  }

  generatePdf() {
    const doc = new jsPDF();
    autoTable(doc, {
      html: '#dataTable',
      theme: 'grid',
      
    });
    // doc.save('table.pdf');
    const pdfOutput = doc.output('blob');
    const url = URL.createObjectURL(pdfOutput);
    window.open(url, '_blank');
  }
   
}
