import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AdminOperationService } from '../admin-operation.service';
import { ViewAllDetails } from '../view-all-details';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
 ad : ViewAllDetails [] =[];

 
  constructor(private router: Router, private adminOp : AdminOperationService){
    if(localStorage.getItem('email')==null){
      this.router.navigate(['admin-login'])
    }
  }
  ngOnInit() {
    this.getAdData();
  }

  getAdData(){
    this.adminOp.getAd().subscribe(data=>{
     this.ad = data;
    });
  }

  logout(){
   localStorage.removeItem('email');
   this.router.navigate(['admin-login']);
  }

  viewDetails(id:any){
    this.router.navigate(['view-data',id]);
  }
}
