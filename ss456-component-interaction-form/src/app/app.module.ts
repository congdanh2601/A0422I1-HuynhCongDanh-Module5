import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HackernewsModule} from "./hackernews/hackernews.module";
import {CountdownTimerModule} from "./countdown-timer/countdown-timer.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HackernewsModule,
    CountdownTimerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
