import {Pipe, PipeTransform} from '@angular/core';

const dayNames = [
  {
    short: 'Sun',
    full: 'Sunday'
  },
  {
    short: 'Mon',
    full: 'Monday'
  },
  {
    short: 'Tue',
    full: 'Tuesday'
  },
  {
    short: 'Wen',
    full: 'Wednesday'
  },
  {
    short: 'Thu',
    full: 'Thursday'
  },
  {
    short: 'Fri',
    full: 'Friday'
  },
  {
    short: 'Sat',
    full: 'Saturday'
  }
];

@Pipe({name: 'weekDay'})
export class WeekDayPipe implements PipeTransform {
  transform(value: string, format: 'short' | 'full'): string {
    const currentDate = new Date();
    const date = new Date(value);
    if (currentDate.getMonth() === date.getMonth() && currentDate.getDate() === date.getDate()) {
      return 'Today';
    } else {
      return format === 'short' ? dayNames[date.getDay()].short : dayNames[date.getDay()].full;
    }
  }
}
