# 数据绑定

- angular默认的数据绑定方式是**单向**的（但angularJs默认双向绑定）
- 使用插值表达式：  ```<h1>{{productTitle}}</h1>```
- 使用方括号，将HTML标签的一个属性绑定到一个表达式上：```<img [src] = "imgUrl">```
- 使用小括号，将组件控制器的一个方法，绑定为模板上的一个事件处理器：```<input (input)="onInput($event)">```:
  - 小括号表示这是一个事件绑定，input是事件名称
  - onInput是组件里面定义的方法名称
  - "onInput($event)" 是当事件发生时执行的表达式
  - $event 是浏览器事件对象，浏览器通用
  - 被绑定的事件可以是标准的DOM事件，也可以是自定义事件
  - 也可以直接赋值，写法：```<button (click)="saved = true"></button>```

## HTML属性和DOM属性
  - 少量HTML属性和DOM属性之间有1:1的映射，如id
  - 有些HTML属性没有对应的DOM属性，如colspan
  - 有些DOM属性没有对应的HTML属性，如textContent
  - 就算名字相同，HTML属性和DOM属性也不是同一个东西
  - HTML属性值指定了初始值，DOM属性的值表示当前值，DOM属性的值可以改变，HTML属性的值不能改变
  - 模板绑定，是通过DOM属性和事件开工作的，而不是HTML属性
  - HTML属性的改变会去同步DOM，而DOM的改变不会同步DOM属性 (浏览器机制负责干这个事)
  - **我们应该优先使用DOM属性绑定的方式**

## DOM属性绑定
  - ```<img [src]="imgUrl">```
  - ```<img src="{{imgUrl}}">```
 
## HTML属性绑定
  - 基本HTML属性绑定：```<td [attr.colspan]="tableColspan">基本HTML属性绑定</td>```
  - CSS类绑定：
    - ``` <div class="aa bb" [class]="someExpression">CSS类绑定1</div> ```：表达式的值会完全替换掉原来class的值
    - ``` <div> [class.special]="isSpecial">CSS类绑定2</div>```：当表达式是true有这个class，为false则无
    - ``` <div> [ngClass]="{{'aa': isA, 'bb': isB}}">CSS类绑定3</div>```: 可以同时控制多个css的类是否显示，true则显示
  - 样式绑定：
    - ``` <button> [style.color]=" isSpecial ? 'red' : 'green' ">HTML样式绑定1</button>```
    - ``` <div [ngStyle]="{ 'font-style' : this.canSave ? 'italic' : 'normal' }">HTML样式绑定2</div>```

## 双向绑定
  - 可以非常简单地使**视图和模型保持同步，无论哪一方改变，另一方都能立即被同步**
  - 第一种： ```<input [value]="name" (input)="twoBind($event)">```，其中name，twoBind()在Controller中
  - 第二种： ```<input [(ngModel)]="name2">```，其中name2在Controller中;ngModel指令用在哪个标签上会处理哪个事件
  ，是由angular内部的一组ControlValueAccessor接口的默认实现来管理的。(多用于表单处理)
  


# AngularBind

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
