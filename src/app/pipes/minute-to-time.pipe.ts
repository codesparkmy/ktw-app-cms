import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minuteToTime',
})
export class MinuteToTimePipe implements PipeTransform {
  transform(value: number): string {
    var hour24 = (value - (value % 60)) / 60;
    var hour12 = hour24;
    var amPm = 'AM';
    if (hour24 >= 12) {
      amPm = 'PM';
      if (hour24 > 12) hour12 -= 12;
    }

    return `${hour12}:${(value % 60).toString().padStart(2, '0')} ${amPm}`;
  }
}
