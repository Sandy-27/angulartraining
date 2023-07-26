import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor() { }
  IsLoggedIn: boolean = false
  Login() {
    this.IsLoggedIn = true;
  }
  Logout() {
    this.IsLoggedIn = false;
  }
 
}
