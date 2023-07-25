import { Component } from '@angular/core';
import { ShowData } from '../show-data';
import { Router } from '@angular/router';
import { ShowDataService } from '../show-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  ad : ShowData [] =[];

 
  constructor(private router: Router, private adminOp : ShowDataService){
  }
  ngOnInit() {
    this.getAllAd();
  }
  
  getAllAd() {
    this.adminOp.getAllAd().subscribe(data =>{
      this.ad = data;
    })
  }

  viewAd(id:any) {
    this.router.navigate(['show-details',id]);
  }

}
