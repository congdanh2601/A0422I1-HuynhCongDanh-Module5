import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';



@NgModule({
  declarations: [CountdownTimerComponent],
  exports: [
    CountdownTimerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CountdownTimerModule { }
