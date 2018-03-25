import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  diretion = '방향';
  keyboradDiretion = '방향';

  onSwipeLeft(e) {
    console.log('왼쪽');
    console.log(e);
    this.diretion = 'LEFT';
  }

  onSwipeRight(e) {
    console.log('오른쪽');
    console.log(e);
    this.diretion = 'RIGHT';
  }

  onSwipeUp(e) {
    console.log('위로');
    console.log(e);
    this.diretion = 'UP';
  }

  onSwipeDown(e) {
    console.log('아래로');
    console.log(e);
    this.diretion = 'Down';
  }

  onkeyUpArrowDown(e) {
    this.diretion = 'Down';
  }
  onkeyUpArrowRight(e) {
    this.diretion = 'Right';
  }
  onkeyUpArrowLeft(e) {
    this.diretion = 'Left';
  }
  onkeyUpArrowUp(e) {
    this.diretion = 'Up';
  }
}
