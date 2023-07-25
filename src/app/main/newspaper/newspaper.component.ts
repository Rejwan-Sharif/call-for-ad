import { Component } from '@angular/core';
import { NewspaperService } from '../newspaper.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Newspaper } from '../newspaper';

@Component({
  selector: 'app-newspaper',
  templateUrl: './newspaper.component.html',
  styleUrls: ['./newspaper.component.css']
})
export class NewspaperComponent {
 
  np = new Newspaper();
  constructor(private service :  NewspaperService, private route:ActivatedRoute, private router:Router) {}

  saveData(){
    this.service.dataInsert(this.np).subscribe(data => {
      if(data != null){
        alert("Success");
        this.router.navigate(['']);
      }else{
        alert("Somthings Went  Wrong!");
      }
    });
  }
}
