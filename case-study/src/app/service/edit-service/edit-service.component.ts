import {Component, Input, OnInit} from '@angular/core';
import {Facility} from "../facility";

@Component({
  selector: 'app-edit-service',
  templateUrl: './edit-service.component.html',
  styleUrls: ['./edit-service.component.css']
})
export class EditServiceComponent implements OnInit {
  @Input() service: Facility;

  constructor() { }

  ngOnInit(): void {
  }

}
