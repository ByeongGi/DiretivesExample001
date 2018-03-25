import {
  BrowserModule,
  HAMMER_GESTURE_CONFIG
} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HammerConfig } from './app.hammer.config';
import { AppComponent } from './app.component';
import { SwipeDirective } from './swipe.directive';
import { KeyupaArrowDirective } from './keyup-arrow.directive';
import { PlaceholderMessegeDirective } from './placeholder-messege.directive';
import { CommomMessegeService } from './commom-messege.service';

@NgModule({
  declarations: [AppComponent, SwipeDirective, KeyupaArrowDirective, PlaceholderMessegeDirective],
  imports: [BrowserModule],
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: HammerConfig
    }, CommomMessegeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
