import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { LoginPayload } from '../login-payload';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginPayload:LoginPayload=new LoginPayload();

  constructor(
    private authService : AuthService,
    private router : Router
  ) { }

  ngOnInit() {
  }

  onSubmit(myForm:NgForm){
    this.authService.login(this.loginPayload).subscribe(data=>{
      if(data){
        console.log("login success");
        this.router.navigateByUrl("/home");
      }else{
        console.log("login failed");
      }
    });
  }

}
