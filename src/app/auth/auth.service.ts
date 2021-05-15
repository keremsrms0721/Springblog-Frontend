import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtAutResponse } from './jwt-aut-response';
import { LoginPayload } from './login-payload';
import { RegisterPayload } from './register-payload';
import { LocalStorageService } from 'ngx-webstorage';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  private url: string="http://localhost:8080/api/auth/";

  constructor(private httpClient : HttpClient,private localStorage:LocalStorageService) {  }
  logout() {
    this.localStorage.clear('authenticationToken'); 
    this.localStorage.clear('username');
  }

  register(registerPayload : RegisterPayload): Observable<any>{
    return this.httpClient.post(this.url + "signup", registerPayload);
  }
  login(loginPayload: LoginPayload) : Observable<boolean> {
    return this.httpClient.post<JwtAutResponse>
    (this.url+"login",loginPayload)
    .pipe(map(data=>{
      this.localStorage.store('authenticationToken',data.authenticationToken);
      this.localStorage.store('username',data.username);
      return true;
    }))
    ; 
  }
  isAuthenticated():Boolean{
    return this.localStorage.retrieve('username') != null;
  }
}
