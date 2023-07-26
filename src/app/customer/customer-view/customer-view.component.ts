import { Component } from '@angular/core';
import { ObservableNotification } from '@ngrx/effects/src/utils';
import { Store } from '@ngrx/store';
import { select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/model/customer';
import { selectCustomers } from '../store/selector/customer.selectors';

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.css']
})
export class CustomerViewComponent {
  customer$!:Observable<Customer[]>
constructor(private store:Store){
this.customer$=this.store.pipe(select(selectCustomers))
}

}
