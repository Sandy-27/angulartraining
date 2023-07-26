import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthgaurdService } from './authgaurd.service';
import { EmployeeComponent } from './employee/employee.component';
import { FormspageComponent } from './formspage/formspage.component';
import { NextpageComponent } from './nextpage/nextpage.component';
import { NextpagedetailsComponent } from './nextpagedetails/nextpagedetails.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';
import { ProductOffersComponent } from './product-offers/product-offers.component';
import { ProductsComponent } from './products/products.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { TemplateComponent } from './template/template.component';

const routes: Routes = [
  {path:'',component:ProductsComponent},
  {path:'nextpage',component:NextpageComponent},  
  {
    path:'nextpage/:id',component:NextpagedetailsComponent,
    children:[
      {path:'description',component:ProductDescriptionComponent},
      {path:'offers',component:ProductOffersComponent}
    ]
  },
  {path:'formspage',component:FormspageComponent},
  {path:'templateform',component:TemplateComponent,canActivate:[AuthgaurdService]},
  {path:'reactiveform',component:ReactiveComponent},
  {path:'Httpclient',component:EmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
