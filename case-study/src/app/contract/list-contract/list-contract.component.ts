import {Component, Input, OnInit} from '@angular/core';
import {Contract} from "../contract";
import {Customer} from "../../customer/customer";
import {Facility} from "../../service/facility";

@Component({
  selector: 'app-list-contract',
  templateUrl: './list-contract.component.html',
  styleUrls: ['./list-contract.component.css']
})
export class ListContractComponent implements OnInit {
  contracts: Contract[] = [];
  @Input() customers: Customer[] = [];
  @Input() services: Facility[] = [];
  @Input() customer: Customer;
  @Input() service: Facility;

  constructor() {
  }

  ngOnInit(): void {
  }



}
