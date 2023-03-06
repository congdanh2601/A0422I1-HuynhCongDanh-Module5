import { Injectable } from '@angular/core';
import {IWord} from "./iword";

@Injectable({
  providedIn: 'root'
})
export class DictionaryServiceService {
  private words: IWord[] = [];
  constructor() {
    this.words.push({word: 'School', mean: 'Trường học'});
    this.words.push({word: 'Monday', mean: 'Thứ Hai'});
    this.words.push({word: 'Sunday', mean: 'Chủ Nhật'});
    this.words.push({word: 'travel', mean: 'Du lịch'});
    this.words.push({word: 'cook', mean: 'Nấu ăn'});
    this.words.push({word: 'knife', mean: 'Con dao'});
    this.words.push({word: 'Hero', mean: 'Anh hùng'});
    this.words.push({word: 'Tomorrow', mean: 'Ngày mai'});
  }

  findAll() {
    return this.words;
  }

  translate(word: string) {
    return this.words.filter(element => element.word === word)[0];
  }
}
