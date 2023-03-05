import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListCustomerComponent } from './customer/list-customer/list-customer.component';
import {CreateServiceComponent} from "./service/create-service/create-service.component";
import {DeleteServiceComponent} from "./service/delete-service/delete-service.component";
import {ListServiceComponent} from "./service/list-service/list-service.component";
import {EditServiceComponent} from "./service/edit-service/edit-service.component";
import { CreateCustomerComponent } from './customer/create-customer/create-customer.component';
import { EditCustomerComponent } from './customer/edit-customer/edit-customer.component';
import { DeleteCustomerComponent } from './customer/delete-customer/delete-customer.component';
import { CreateContractComponent } from './contract/create-contract/create-contract.component';
import { ListContractComponent } from './contract/list-contract/list-contract.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    CreateServiceComponent,
    DeleteServiceComponent,
    ListServiceComponent,
    EditServiceComponent,
    ListCustomerComponent,
    CreateCustomerComponent,
    EditCustomerComponent,
    DeleteCustomerComponent,
    CreateContractComponent,
    ListContractComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
