import {Component, Input, OnInit} from '@angular/core';
import {Article} from "../article";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() articles: Article[];

  constructor() { }

  ngOnInit(): void {
  }

}
