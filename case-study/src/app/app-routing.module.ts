import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListServiceComponent} from "./service/list-service/list-service.component";
import {ListCustomerComponent} from "./customer/list-customer/list-customer.component";
import {ListContractComponent} from "./contract/list-contract/list-contract.component";


const routes: Routes = [
  {
    path: '',
    component: ListServiceComponent
  },
  {
    path: 'service',
    component: ListServiceComponent
  },
  {
    path: 'customer',
    component: ListCustomerComponent
  },
  {
    path: 'contract',
    component: ListContractComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
