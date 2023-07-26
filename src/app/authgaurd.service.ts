import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { AuthserviceService } from './authservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthgaurdService {

  constructor(private authservice: AuthserviceService, private router: Router) { }
  IsLog = true
  canActivate(route: ActivatedRouteSnapshot) {

    console.warn("this.authservice.IsLoggedIn");
    if (this.authservice.IsLoggedIn) {
      return true
    }
    else {
      return this.router.navigateByUrl("")
    }
  }
}
