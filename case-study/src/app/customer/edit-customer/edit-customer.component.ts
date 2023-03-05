import {Component, Input, OnInit} from '@angular/core';
import {Customer} from "../customer";

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {
  @Input() customer: Customer;

  constructor() { }

  ngOnInit(): void {
  }

}
