import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent {
 value:any
    RegistrationForm = this.Fb.group({
      Name: ['', [Validators.required, Validators.minLength(5),Validators.pattern('[A-Za-z]*')/*,this.validateUserName*/]],
      Email: ['', [Validators.required, Validators.minLength(10),/*Validators.email*/]],
      Password: ['', [Validators.required, Validators.minLength(8)/*,Validators.pattern(new RegExp(/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/))*/]],
      Department: ['', [Validators.required]],
      PhoneNumber: ['', [Validators.required, Validators.minLength(10)]],
      DateOfBirth: ['', [Validators.required]],
      isChecked: ['', [Validators.required]]
    });
  
    get Name() {
      return this.RegistrationForm.get('Name');
    }
    get Email() {
      return this.RegistrationForm.get('Email');
    }
    get Password() {
      return this.RegistrationForm.get('Password');
    }
    get Department() {
      return this.RegistrationForm.get('Department');
    }
    get PhoneNumber() {
      return this.RegistrationForm.get('PhoneNumber');
    }
    get DateOfBirth() {
      return this.RegistrationForm.get('DateOfBirth');
    }
    get IsChecked() {
      return this.RegistrationForm.get('IsChecked');
    }
  
    constructor(private Fb: FormBuilder) {}
  
    ngOnInit(): void {}
  
    
    onSubmit(details:any){
  this.value=details.value
    }
  }

