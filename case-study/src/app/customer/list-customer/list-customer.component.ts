import { Component, OnInit } from '@angular/core';
import {Customer} from "../customer";

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {
  customers: Customer[] = [];
  selectedCustomer: Customer = null;

  constructor() {
    this.customers.push({name: 'Huỳnh Công Danh', address: 'Quảng Nam', birthday: '26/01/1996', customerType: 'Diamond', email: 'congdanh@gmail.com', gender: true, idNumber: '205873518', phone: '0376300628'});
    this.customers.push({name: 'Hoàng Phúc Tân', address: 'Huế', birthday: '10/10/2000', customerType: 'Gold', email: 'phuctan@gmail.com', gender: true, idNumber: '123456789', phone: '0905350812'});
    this.customers.push({name: 'Hồ Hà Minh', address: 'Đà Nẵng', birthday: '11/11/1993', customerType: 'Platinum', email: 'minhho@gmail.com', gender: true, idNumber: '987654321', phone: '0909887654'});
  }

  selectCustomer(customer: Customer) {
    this.selectedCustomer = customer;
  }

  ngOnInit(): void {
  }

}
