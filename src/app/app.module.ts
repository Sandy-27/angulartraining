import { NgModule, isDevMode } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { PipecomponentPipe } from './pipecomponent.pipe';
import { DirectivesDirective } from './directives.directive';
import { NextpageComponent } from './nextpage/nextpage.component';
import{HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { TooltipDirective } from './tooltip.directive';
import { FormspageComponent } from './formspage/formspage.component';
import { TemplateComponent } from './template/template.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { NextpagedetailsComponent } from './nextpagedetails/nextpagedetails.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';
import { ProductOffersComponent } from './product-offers/product-offers.component';
import { EmployeeComponent } from './employee/employee.component';
import { httpInterceptorProvider } from './user';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { ToastNotificationsModule } from 'ngx-toast-notifications';
import { CustomerViewComponent } from './customer/customer-view/customer-view.component';
import { CustomerAddComponent } from './customer/customer-add/customer-add.component';
import { customerFeatureKey, reducer } from './customer/store/reducer/customer.reducer';
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    PipecomponentPipe,
    DirectivesDirective,
    NextpageComponent,
    TooltipDirective,
    FormspageComponent,
    TemplateComponent,
    ReactiveComponent,
    NextpagedetailsComponent,
    ProductDescriptionComponent,
    ProductOffersComponent,
    EmployeeComponent,
    CustomerViewComponent,
    CustomerAddComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastNotificationsModule.forRoot({duration: 6000, type: 'primary'}),
    StoreModule.forRoot(reducers, { metaReducers }),
    // !isDevMode() ? StoreDevtoolsModule.instrument() : [],
    StoreModule.forFeature(customerFeatureKey,reducer)
  ],
  providers: [httpInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
