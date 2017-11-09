import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-bind',
  templateUrl: './bind.component.html',
  styleUrls: ['./bind.component.css']
})
export class BindComponent implements OnInit {

  imgUrl = 'http://via.placeholder.com/350x150';

  size = 10;

  divClass = '';

  isBig = false;

  divClassObj = {a: false, b: false, c: false};

  isDev = true;

  divStyleObj = {color: 'red', background: 'yellow'};

  name: string;

  constructor() {
    setTimeout(() => { // 一次性定时器
      this.divClass = 'a b c';
      this.isBig = true;
      this.divClassObj = {a: true, b: true, c: true};
      this.isDev = false;
      this.divStyleObj = {color: 'yellow', background: 'red'};
    }, 3000);

    setInterval( () => { // 周期性定时器
      this.name = 'Tom';
    }, 3000);

  }

  ngOnInit() {
  }

  doOnclick(event: any) {
    console.log(event);
  }

  doOnInput(event: any) {
    console.log(event.target.value); // 这个value是dom属性
    console.log(event.target.getAttribute('value')); // 这个value是html属性
  }

  twoBind(event: any) {
    this.name = event.target.value;
  }

}
