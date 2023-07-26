import { createReducer, on } from '@ngrx/store';
import { Customer } from 'src/app/model/customer';
import * as CustomerActions from '../action/customer.actions';

export const customerFeatureKey = 'customer';

export interface CustomerState {
  customer:Customer[];
}

export const initialState: CustomerState = {
customer:[]
}


export const reducer = createReducer(
  initialState,

  on(CustomerActions.addCustomers,(state:CustomerState,{customer})=>({
    ...state,
    customer:[...state.customer,customer]
  }))
);

