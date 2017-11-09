import { Pipe, PipeTransform } from '@angular/core';

/**
 * 是一个带有管道元数据装饰器的类，与组件和模块是一样的，通过装饰器来告诉angular，这是一个管道
 * multiple：自定义管道的名字，必须是一个有效的javaScript标识符
 */
@Pipe({
  name: 'multiple'
})
export class MultiplePipe implements PipeTransform {

  /**
   *
   * @param value 管道入参
   * @param args 可选参数(管道附带的参数)
   * @returns {any} 返回期望值
   */
  transform(value: number, args?: number): any {
    if(!args){
      args = 1;
    }
    return value * args;
  }

}
