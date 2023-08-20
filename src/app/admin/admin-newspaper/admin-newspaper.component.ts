import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Newspaper } from 'src/app/main/newspaper';
import { NewspaperService } from 'src/app/main/newspaper.service';

@Component({
  selector: 'app-admin-newspaper',
  templateUrl: './admin-newspaper.component.html',
  styleUrls: ['./admin-newspaper.component.css']
})
export class AdminNewspaperComponent {
adList : Newspaper[] =[];
constructor(private service: NewspaperService, private router: Router){
  if(localStorage.getItem('email')==null){
    this.router.navigate(['admin-login'])
  }
}

ngOnInit(){
  this.service.getAllAd().subscribe(data=>{
    this.adList = data;
  });
}

   showData(id:any){
    this.router.navigate(['newspaper-ad',id]);
   }
}
