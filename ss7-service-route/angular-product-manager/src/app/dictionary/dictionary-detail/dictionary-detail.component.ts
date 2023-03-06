import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DictionaryServiceService} from "../dictionary-service.service";
import {IWord} from "../iword";

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {
  word: IWord = {word: 'Hello', mean: 'Xin chào'};
  constructor(private activatedRoute: ActivatedRoute, private dictionaryService: DictionaryServiceService) {
    this.activatedRoute.paramMap.subscribe(next => {
      const word = next.get('word');
      console.log(word)
      if (word != null) {
        this.word = this.dictionaryService.translate(word);

      }
    }, error => {

    }, () => {

    });
  }

  ngOnInit(): void {
  }

}
