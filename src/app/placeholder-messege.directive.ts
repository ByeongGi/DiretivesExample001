import { Directive, ElementRef, Renderer2, OnInit, Input } from '@angular/core';
import { CommomMessegeService } from './commom-messege.service';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[placeholder-messege]'
})
export class PlaceholderMessegeDirective implements OnInit {
  @Input() placeholderMsgText: string[];

  // DOM 에 대한 직접적인 접근보다는 Renderer2를 통한 간점 접근을 권장함
  constructor(
    private commomMessegeService: CommomMessegeService,
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.renderer.setAttribute(
      this.el.nativeElement,
      'placeholder',
      this.commomMessegeService.getMessege(
        this.placeholderMsgText[0],
        this.placeholderMsgText[1]
      )
    );
  }
}
