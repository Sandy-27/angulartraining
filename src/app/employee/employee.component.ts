import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Employee, User } from '../user';
import { WatchService } from '../watch.service';
import { Toaster } from 'ngx-toast-notifications';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  email:string='';
  password:string=''
  employee: Employee[] = [];
  e: Employee = new Employee();
  constructor(private service: WatchService,private route: Router, private toaster: Toaster) { }
  ngOnInit() {
    this.service.Token(this.email,this.password).subscribe({next:(data)=>{
      console.warn(data)
      AuthService.SetDataWithExpiry("token", data.token, data.expiryInMinutes)
    if (AuthService.GetData("token") == null) {
      this.toaster.open({ text: 'Your Session has been Expired', position: 'top-center', type: 'warning' })
      this.route.navigateByUrl("")
    }
    this.service.getemployeeDetails().subscribe(data => {
   
      this.employee = data
      console.log(this.employee)
    })
    this.employee.push(this.e);

  }
  });
  }
  onSubmit(details: any) {
    console.warn(details.value);
    this.service.createEmployee(details.value).subscribe(data => {
      data
    })
  

}
}
