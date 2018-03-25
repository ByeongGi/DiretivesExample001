import { Directive, HostListener, Output, EventEmitter } from '@angular/core';

/**
 * 범위
 */
export const DOM_SCOPE = {
  WINDOW : 'window'
};
/**
 * 방향키
 */
export const KEYUP_ARROWS = {
  ARROWLEFT: 'keyup.ArrowLeft',
  ARROWRIGHT: 'keyup.ArrowRight',
  ARROWUP: 'keyup.ArrowUp',
  ARROWDOWN: 'keyup.ArrowDown'
};
/**
 *  Winodow 범위로 User의 방향키 이벤트 Linerner를 구현
 *
 *  @HostListener(`${DOM_SCOPE.WINDOW}:${KEYUP_ARROWS.ARROWLEFT}`, ['$event'])
 *  => ${DOM_SCOPE.WINDOW}:${KEYUP_ARROWS.ARROWLEFT} = 'window:keyup.ArrowLeft'
 */
@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[keyup-arrow]'
})
export class KeyupaArrowDirective {
  constructor() {}

  @Output() keyUpArrowLeft: EventEmitter<KeyboardEvent>   = new EventEmitter<KeyboardEvent>();
  @Output() keyUpArrowRight: EventEmitter<KeyboardEvent>   = new EventEmitter<KeyboardEvent>();
  @Output() keyUpArrowUp: EventEmitter<KeyboardEvent>   = new EventEmitter<KeyboardEvent>();
  @Output() keyUpArrowDown: EventEmitter<KeyboardEvent>   = new EventEmitter<KeyboardEvent>();
  /**
   * 방향키(왼쪽) 이벤트 리스너
   * @param event {KeyboardEvent}
   */
  @HostListener(`${DOM_SCOPE.WINDOW}:${KEYUP_ARROWS.ARROWLEFT}`, ['$event'])
  onKeyUpArrowLeftListener( event: KeyboardEvent) {
    this.keyUpArrowLeft.emit(event);
    // console.log(event);
  }
  /**
   * 방향키(오른쪽) 이벤트 리스너
   * @param event {KeyboardEvent}
   */
  @HostListener(`${DOM_SCOPE.WINDOW}:${KEYUP_ARROWS.ARROWRIGHT}`, ['$event'])
  onKeyUpArrowRightListener( event: KeyboardEvent) {
    this.keyUpArrowRight.emit(event);
    // console.log(event);
  }
/**
   * 방향키(위) 이벤트 리스너
   * @param event {KeyboardEvent}
   */
  @HostListener(`${DOM_SCOPE.WINDOW}:${KEYUP_ARROWS.ARROWUP}`, ['$event'])
  onKeyUpArrowUpListener( event: KeyboardEvent) {
    this.keyUpArrowUp.emit(event);
    // console.log(event);
  }
  /**
   * 방향키(아래) 이벤트 리스너
   * @param event {KeyboardEvent}
   */
  @HostListener(`${DOM_SCOPE.WINDOW}:${KEYUP_ARROWS.ARROWDOWN}`, ['$event'])
  onKeyUpArrowDownListener( event: KeyboardEvent) {
    this.keyUpArrowDown.emit(event);
    // console.log(event);
  }









}
