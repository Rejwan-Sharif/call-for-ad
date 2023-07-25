import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Newspaper } from 'src/app/main/newspaper';
import { NewspaperService } from 'src/app/main/newspaper.service';

@Component({
  selector: 'app-view-newspaper-data',
  templateUrl: './view-newspaper-data.component.html',
  styleUrls: ['./view-newspaper-data.component.css']
})
export class ViewNewspaperDataComponent {

 ns = new Newspaper();
  constructor(private service  : NewspaperService, private route : ActivatedRoute, private router : Router){
    if(localStorage.getItem('email')==null){
      this.router.navigate(['login'])
    }
  }
ngOnInit() {
  let id = this.route.snapshot.params['id'];
  this.service.viewFullAD(id).subscribe(data => {
    this.ns = data;
  });
}

updateAdStatus(){
  this.service.updateStatus(this.ns).subscribe(data => {
    alert("Status updated successfully");
    this.router.navigate(['admin']);
  });
}


}
