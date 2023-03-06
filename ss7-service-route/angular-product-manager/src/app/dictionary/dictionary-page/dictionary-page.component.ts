import { Component, OnInit } from '@angular/core';
import {IWord} from "../iword";
import {DictionaryServiceService} from "../dictionary-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dictionary-page',
  templateUrl: './dictionary-page.component.html',
  styleUrls: ['./dictionary-page.component.css']
})
export class DictionaryPageComponent implements OnInit {
  words: IWord[] = [];
  constructor(private dictionaryService: DictionaryServiceService, private router: Router) {
    this.words = this.dictionaryService.findAll();
  }

  ngOnInit(): void {
  }

}
