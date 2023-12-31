import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Promotion } from 'src/app/vendor/promotion';
import { PromotionService } from 'src/app/vendor/promotion.service';

@Component({
  selector: 'app-show-promotion',
  templateUrl: './show-promotion.component.html',
  styleUrls: ['./show-promotion.component.css']
})
export class ShowPromotionComponent {
  promo : Promotion[]= [];
  constructor(private service: PromotionService, private router: Router){
    if(localStorage.getItem('email')==null){
      this.router.navigate(['admin-login'])
    }
  }

  ngOnInit(){
    this.service.viewPromo().subscribe(data=>{
      this.promo = data;
    });
  }


   



}
