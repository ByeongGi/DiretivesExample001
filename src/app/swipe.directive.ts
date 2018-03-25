import { Directive, HostListener, Output, EventEmitter } from '@angular/core';

export const SWIPE_DIRECTION = {
  SWIPELEFT: 'swipeleft',
  SWIPERIGHT: 'swiperight',
  SWIPEUP: 'swipeup',
  SWIPEDOWN: 'swipedown'
};

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[swipe]'
})
export class SwipeDirective {
  @Output() public swipeLeft: EventEmitter<Object> = new EventEmitter<Object>();
  @Output() public swipeRight: EventEmitter<Object> = new EventEmitter<Object>();
  @Output() public swipeUp: EventEmitter<Object> = new EventEmitter<Object>();
  @Output() public swipeDown: EventEmitter<Object> = new EventEmitter<Object>();

  constructor() {}

  @HostListener(SWIPE_DIRECTION.SWIPELEFT, ['$event'])
  onSwipeLeft(event) {
    // console.log(event);
    this.swipeLeft.emit(event);
  }

  @HostListener(SWIPE_DIRECTION.SWIPERIGHT, ['$event'])
  onSwipeRight(event) {
    this.swipeRight.emit(event);
  }

  @HostListener(SWIPE_DIRECTION.SWIPEUP, ['$event'])
  onSwipeUp(event) {
    // console.log(event);
    this.swipeUp.emit(event);
  }

  @HostListener(SWIPE_DIRECTION.SWIPEDOWN, ['$event'])
  onSwipeDown(event) {
    // console.log(event);
    this.swipeDown.emit(event);
  }

}
