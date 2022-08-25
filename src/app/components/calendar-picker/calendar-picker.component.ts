import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'calendar-picker',
  templateUrl: './calendar-picker.component.html',
  styleUrls: ['./calendar-picker.component.scss'],
})
export class CalendarPickerComponent implements OnInit {
  calendarDates = [];
  constructor() {}

  ngOnInit() {
    this.fillMonth();
  }

  fillMonth() {
    var startDay = new Date().getDay();
    var today = new Date();
    var lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);

    console.log();
    for (let index = 0; index <= lastDayOfMonth.getDate(); index++) {
      if (index >= startDay - 1) {
        var insertedDate = index + 2 - startDay;

        this.calendarDates.push({
          label: insertedDate,
          isSelected: insertedDate == new Date().getDate(),
        });
      } else {
        this.calendarDates.push({
          label: '',
        });
      }
    }
  }
}
