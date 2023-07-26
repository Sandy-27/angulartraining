import { Component } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent {
  topics =['angular','react','php'];
  genders=['Male','Female'];
  value:any
  maxDate:any
  year:any
  userModel:User=new User();
  ngOnInit(){
    var date: any = new Date();

    var toDate: any = date.getDate();
    if (toDate < 10) {
      toDate = "0" + toDate;
    }
    var month = date.getMonth() + 1;
    if (month < 10) {
      month = '0' + month;
    }
    var year = date.getFullYear(); 
    this.maxDate = year + "-" + month + "-" + toDate;
    console.log(this.maxDate);
  }
  validateDateOfBirth(){
    this.year=parseInt(this.userModel.date);
    var today=new Date();
    console.log(this.year)
    var a=today.getFullYear()-this.year
    console.log(a)
    if((today.getFullYear()-this.year)<=18){   
      return true
    }
    return false
  }
  onSubmit(details:any)
  {
    this.value=details.value
    console.log(this.userModel);
  }


}
