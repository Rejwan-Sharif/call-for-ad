import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AdminOperationService } from '../admin-operation.service';
import { AdminOperation } from '../admin-operation';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {

  email:any;
  password:any;
  constructor(private router: Router , private adminService :AdminOperationService){
    if(localStorage.getItem('email')!=null){
      this.router.navigate(['admin-login']);
    }
  }
  
  login(){
   let admin : AdminOperation = new AdminOperation("","",this.email,this.password);
   this.adminService.authlogin(admin).subscribe(data =>{
    if(data != null){
      localStorage.setItem('email',data.email);
      this.router.navigate(['admin']);
    }else{
      alert("your email or password is invalid")
    }
   });
  }

}
