import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'time'})
export class TimePipe implements PipeTransform {
  transform(value: number): string {
    let stringValue = value + '';
    if (stringValue.length === 1) {
      stringValue = '0' + stringValue;
    }
    return stringValue + ':00';
  }
}
