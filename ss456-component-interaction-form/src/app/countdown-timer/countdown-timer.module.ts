import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
import {CountdownTimerRoutingModule} from "./countdown-timer/countdown-timer-routing.module";



@NgModule({
  declarations: [CountdownTimerComponent],
  exports: [
    CountdownTimerComponent
  ],
  imports: [
    CommonModule,
    CountdownTimerRoutingModule
  ]
})
export class CountdownTimerModule { }
