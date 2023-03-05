import { Component, OnInit } from '@angular/core';
import {Facility} from "../facility";

@Component({
  selector: 'app-list-service',
  templateUrl: './list-service.component.html',
  styleUrls: ['./list-service.component.css']
})
export class ListServiceComponent implements OnInit {
  services: Facility[] = [];
  selectedService: Facility = null;

  constructor() {
    this.services.push({name: 'Room', area: 1000, price: 10000, capacity: 4, rentType: 'byWeek', photo: 'https://furamavietnam.com/wp-content/uploads/2018/03/%5E224942630D3A5A787C2989A9F5AF4A3E34E6A8CAE8D94FA3D4%5Epimgpsh_fullsize_distr.jpg'});
    this.services.push({name: 'House', area: 1500, price: 15000, capacity: 5, rentType: 'byMonth', photo: 'https://furamavietnam.com/wp-content/uploads/2018/08/Vietnam_Danang_Furama_Villas_Beach_Pool_Villas-_Exterior-1-F.jpg'});
    this.services.push({name: 'Villa', area: 500, price: 5000, capacity: 3, rentType: 'byDay', photo: 'https://furamavietnam.com/wp-content/uploads/2018/08/Vietnam_Danang_Furama_Villas_Pool_Villas.jpg'});
  }

  selectService(service: Facility) {
    this.selectedService = service;
  }

  ngOnInit(): void {
  }

}
