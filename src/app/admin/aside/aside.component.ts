import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent {

  constructor(private route : ActivatedRoute, private router : Router){
    if(localStorage.getItem('email')==null){
      this.router.navigate(['admin-login'])
    }
  }
  logout(){
    localStorage.removeItem('email');
    this.router.navigate(['admin-login']);
   }

}
