import {
  HammerGestureConfig,
  HAMMER_GESTURE_CONFIG
} from '@angular/platform-browser';
import {DIRECTION_ALL} from 'hammerjs';

export class HammerConfig extends HammerGestureConfig {
  overrides = <any>{
    swipe: { direction : DIRECTION_ALL } // override default settings
  };
}
