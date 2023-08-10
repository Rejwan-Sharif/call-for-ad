import { Component } from '@angular/core';
import { AdminOperationService } from '../admin-operation.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ViewAllDetails } from '../view-all-details';

@Component({
  selector: 'app-view-ad-details',
  templateUrl: './view-ad-details.component.html',
  styleUrls: ['./view-ad-details.component.css']
})
export class ViewAdDetailsComponent {
  vd :  ViewAllDetails = new ViewAllDetails();
  constructor(private adminService  : AdminOperationService, private route : ActivatedRoute, private router : Router){
    if(localStorage.getItem('email')==null){
      this.router.navigate(['login'])
    }
  }
  ngOnInit(){
    let id = this.route.snapshot.params['id'];
    this.adminService.getAdById(id).subscribe(data=>{
    this.vd = data;
   });
  }

  updateStatus(){
    this.adminService.updateAdData(this.vd).subscribe(data=>{
      console.log(data);
      alert('success');
      this.router.navigate(['admin'])
    })
  }
  
}
