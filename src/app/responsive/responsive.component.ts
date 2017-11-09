import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs'; // javaScript响应式编程包
import {FormControl} from '@angular/forms';
import 'rxjs/add/operator/debounceTime'; // import 'rxjs/Rx';

@Component({
  selector: 'app-responsive',
  templateUrl: './responsive.component.html',
  styleUrls: ['./responsive.component.css']
})
export class ResponsiveComponent implements OnInit {

  searchInput: FormControl = new FormControl();

  constructor() {
    // Observable:被观察者(流)，发射下一个元素，可以是任何东西，类型取决于流的源头(from)
    Observable.from([1, 2, 3, 4])
      .filter(e => e % 2 === 0)
      .map(e => e * e)
      .subscribe(
        e => console.log(e), // 处理流中发射出来的元素
        err => console.log(err), // (可选) 处理流中的异常
        () => console.log('没有了，结束了') //  (可选) 在结束时的处理
      );

    this.searchInput.valueChanges
      .debounceTime(1000) // 调用周期
      .subscribe(
        stockCode => this.getStockInfo(stockCode)
      );
  }

  ngOnInit() {
  }

  onKey(value: string) {
    console.log(value);
  }

  getStockInfo(value: string) {
    console.log(value);
  }

}
