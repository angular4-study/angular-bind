import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twobind',
  templateUrl: './twobind.component.html',
  styleUrls: ['./twobind.component.css']
})
export class TwobindComponent implements OnInit {

  name2: string;

  constructor() {
    setInterval( () => { // 周期性定时器
      this.name2 = 'Mary';
    }, 3000);
  }

  ngOnInit() {
  }

}
