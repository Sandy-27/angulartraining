import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';

import { Observable } from 'rxjs';
import { AuthgaurdService } from '../authgaurd.service';

import { AuthserviceService } from '../authservice.service';
import { WatchService } from '../watch.service';

@Component({
  selector: 'app-formspage',
  templateUrl: './formspage.component.html',
  styleUrls: ['./formspage.component.css']
})
export class FormspageComponent {
  constructor(private authservice: AuthserviceService, private authgaurd: AuthgaurdService,private clonehttp:HttpClient) {
  }
   
 response:Observable<any>|undefined;
request(){
  const url="http://jsonplaceholder.typicode.com/todos/1";
  this.clonehttp.get(url).subscribe((data:any)=>{
    this.response=data;
  })
}

  login() {
    this.authservice.Login()
  }
  logOut() {
    this.authservice.Logout()
  }
}
