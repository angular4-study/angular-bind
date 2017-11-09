import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twobind',
  templateUrl: './twobind.component.html',
  styleUrls: ['./twobind.component.css']
})
export class TwobindComponent implements OnInit {

  name: string;

  name2: string;

  constructor() {
    setInterval( () => { // 周期性定时器
      this.name2 = 'Mary';
      this.name = 'Tom';
    }, 3000);
  }

  ngOnInit() {
  }

  twoBind(event: any) {
    this.name = event.target.value;
  }

}
