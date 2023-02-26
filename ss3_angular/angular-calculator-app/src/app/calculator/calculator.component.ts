import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  screen: string = '';
  left: number = 0;
  right: number = 0;
  operator: string = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  clickNumber(num) {
    this.screen += num;
  }

  clickOperator(s: string) {
    if (s == '=') { //tính kết quả
      this.right = parseFloat(this.screen);
      switch (this.operator) {
        case '+':
          this.screen = String(this.left + this.right);
          break;
        case '-':
          this.screen = String(this.left - this.right);
          break;
        case '*':
          this.screen = String(this.left * this.right);
          break;
        case '/':
          this.screen = String(this.left / this.right);
          break;
      }
      this.left = 0;
      this.right = 0;
      this.operator = '';
    } else { // thêm toán hạng
      if (this.left == 0) {
        this.left = parseFloat(this.screen);
        console.log(this.left + ' left');
        this.screen = '';
      } else {
        this.right = parseFloat(this.screen);
        console.log(this.right + ' right');
      }
      this.operator = s; // set toán tử
    }
  }

  delete() {
    this.screen = '';
    this.left = 0;
    this.right = 0;
    this.operator = '';
  }
}
