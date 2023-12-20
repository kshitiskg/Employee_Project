import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginObj:any={
    username:'',
    password:''
  }

  constructor(private route:Router){

  }

  login(){
       if(this.loginObj.username == 'admin' && this.loginObj.password == '1234'){
        localStorage.setItem('employeeLogin',JSON.stringify(this.loginObj))
         this.route.navigateByUrl('dashboard')
       } else{
          alert("Login Failed");
       }
  }
}
