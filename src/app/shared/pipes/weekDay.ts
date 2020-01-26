import {Pipe, PipeTransform} from '@angular/core';

const dayNames = [
  'Sun',
  'Mon',
  'Tue',
  'Wen',
  'Thu',
  'Fri',
  'Sat'
];

@Pipe({name: 'weekDay'})
export class WeekDayPipe implements PipeTransform {
  transform(value: string): string {
    const currentDate = new Date();
    const date = new Date(value);
    console.log(value, date, currentDate, dayNames[date.getDay()]);
    if (currentDate.getMonth() === date.getMonth() && currentDate.getDate() === date.getDate()) {
      return 'Today';
    } else {
      return dayNames[date.getDay()];
    }
  }
}
