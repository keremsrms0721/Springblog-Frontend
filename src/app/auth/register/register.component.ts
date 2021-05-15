import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, NgForm} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../auth.service';
import { RegisterPayload } from '../register-payload';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerPayload : RegisterPayload=new RegisterPayload();

  constructor(
    private authService : AuthService,
    private router:Router,
  ) {
  }

  ngOnInit() {
  }


  onSubmit(form:NgForm) {
    this.authService.register(this.registerPayload).subscribe(data=>{
      console.log("register success");
      this.router.navigateByUrl("/register-success");
    },error=>{
      console.log("register failed");
    });
  }
}
