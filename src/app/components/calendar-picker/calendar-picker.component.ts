import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EventApiService } from 'src/app/services/apis/event.api.service';
import { StorageService } from 'src/app/services/internal/storage.service';

@Component({
  selector: 'calendar-picker',
  templateUrl: './calendar-picker.component.html',
  styleUrls: ['./calendar-picker.component.scss'],
})
export class CalendarPickerComponent implements OnInit {
  calendarDates = [];
  selectedCalendarIndex = null;
  _events = [];

  @Input('selectedDateEvents') selectedDateEvents = [];
  @Output('selectedDateEventsChange') selectedDateEventsChange =
    new EventEmitter<any[]>();

  get events() {
    return this._events;
  }

  set events(newVal) {
    if (newVal == this._events) return;

    this._events = newVal;

    for (const date of this.calendarDates) {
      date.events = newVal.filter(
        (z) =>
          new Date(z.eventDateFrom) <= date.date &&
          new Date(z.eventDateTo) >= date.date
      );
    }
  }

  constructor(
    private eventApiService: EventApiService,
    private storageService: StorageService
  ) {}

  async ngOnInit() {
    this.fillMonth();
  }

  fillMonth() {
    this.calendarDates = [];
    var startDay = new Date().getDate();
    var today = new Date();
    var firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    var lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);

    var dateStart = 0;
    for (let index = 0; dateStart <= lastDayOfMonth.getDate(); index++) {
      if (index >= firstDayOfMonth.getDay()) {
        this.calendarDates.push({
          label: dateStart + 1,
          isSelected: startDay == dateStart + 1,
          events: [],
          date: new Date(today.getFullYear(), today.getMonth(), dateStart + 1),
        });
        if (startDay == dateStart + 1) this.selectedCalendarIndex = index;
        dateStart++;
      } else {
        this.calendarDates.push({
          label: '',
        });
      }
    }
    this.getEventsByOutletId();
    console.log(this.calendarDates);
  }

  async getEventsByOutletId() {
    this.eventApiService
      .getEventByMonth(
        (await this.storageService.decodeToken()).outlet,
        9,
        2022
      )
      .then((res) => {
        this.events = res.data;
      });
  }

  dateClicked(i) {
    this.selectedCalendarIndex = i;
    this.selectedDateEventsChange.emit(this.calendarDates[i].events);
  }
}
