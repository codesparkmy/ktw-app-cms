import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minuteToTime',
})
export class MinuteToTimePipe implements PipeTransform {
  transform(value: number): string {
    return `${(value - (value % 60)) / 60}:${(value % 60)
      .toString()
      .padStart(2, '0')}`;
  }
}
