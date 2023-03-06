import { Component, OnInit } from '@angular/core';
import {Facility} from "../facility";
import {FacilityService} from "../facility-service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-service',
  templateUrl: './list-service.component.html',
  styleUrls: ['./list-service.component.css'],
  providers: [FacilityService]
})
export class ListServiceComponent implements OnInit {
  services: Facility[] = [];
  selectedService: Facility = null;

  constructor(private facilityService: FacilityService, private router: Router) {
    this.services = this.facilityService.findAllFacilities();
  }

  selectService(service: Facility) {
    this.selectedService = service;
  }

  ngOnInit(): void {
  }

}
