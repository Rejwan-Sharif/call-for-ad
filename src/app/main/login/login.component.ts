import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VendorManageService } from 'src/app/vendor/vendor-manage.service';
import { Vendorsignup } from 'src/app/vendor/vendorsignup';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

// loginClass: Vendorsignup =  new Vendorsignup();

email:any;
password:any;
firstName:any;
constructor(private router: Router, private vendorService: VendorManageService){
  if(localStorage.getItem('email')!=null){
    this.router.navigate(['vendor'])
  }
}

login(){
  let logIn: Vendorsignup = new Vendorsignup("","", "", this.email,"", this.password);
  this.vendorService.vendorLogin(logIn).subscribe(Data=> {
    console.log(Data);
    if(Data != null){
      localStorage.setItem("email", this.email);
      localStorage.setItem("firstName", this.firstName);
      localStorage.setItem("id", Data.id);
      this.router.navigate(['vendor']);
    }else{
      alert("User name or Password incorrect");
    }
  });
}

}
