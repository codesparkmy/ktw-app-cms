import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { EventApiService } from 'src/app/services/apis/event.api.service';
import { PublicHolidayApiService } from 'src/app/services/apis/public-holiday.api.service';
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
  currentMonth = new Date().toISOString();
  isDateTimeModalOpen = false;
  @ViewChild('dateTimeModal') dateTimeModal;
  @Input('selectedDateEvents') selectedDateEvents = [];
  @Output('selectedDateEventsChange') selectedDateEventsChange =
    new EventEmitter<any[]>();

  @Input('publicHolidays') publicHolidays = [];
  @Output('publicHolidaysChange') publicHolidaysChange = new EventEmitter<
    any[]
  >();

  get events() {
    return this._events;
  }

  set events(newVal) {
    if (newVal == this._events) return;

    this._events = newVal;

    for (const date of this.calendarDates) {
      date.events = newVal.filter((z) => {
        if (z.type == 'event') {
          return (
            new Date(z.eventDateFrom) <= date.date &&
            new Date(z.eventDateTo) >= date.date
          );
        }
        if (z.type == 'holiday') {
          return z.startDateObj <= date.date && z.endDateObj >= date.date;
        }
        return false;
      });
    }
  }

  constructor(
    private eventApiService: EventApiService,
    private storageService: StorageService,
    private publicHolidaysService: PublicHolidayApiService
  ) {}

  async ngOnInit() {
    this.fillMonth();
  }

  async fillMonth(month?, year?) {
    this.calendarDates = [];
    var startDay = new Date().getDate();

    var today = new Date();
    if (month && year) {
      if (today.getMonth() + 1 != month || today.getFullYear() != year) {
        today = new Date(year, month - 1, 1);
      }
    }

    var firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    var lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);

    var dateStart = 0;
    for (let index = 0; dateStart < lastDayOfMonth.getDate(); index++) {
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
    var events = await this.getEventsByOutletId(
      today.getMonth() + 1,
      today.getFullYear()
    );

    var holidays = await this.getPublicHolidays(
      today.getMonth() + 1,
      today.getFullYear()
    );

    this.events = [
      ...events.data.map((z) => {
        z.type = 'event';
        return z;
      }),
      ...holidays.data.map((z) => {
        z.type = 'holiday';
        var fromDateObj = new Date(z.startDate);
        fromDateObj.setHours(0);
        var toDateObj = new Date(z.endDate);
        toDateObj.setHours(0);
        z.startDateObj = fromDateObj;
        z.endDateObj = toDateObj;
        return z;
      }),
    ];
  }

  async getEventsByOutletId(month, year) {
    return this.eventApiService.getEventByMonth(
      (await this.storageService.decodeToken()).outlet,
      month,
      year
    );
  }

  getPublicHolidays(month, year) {
    return this.publicHolidaysService.getByMonthAndYear(month, year);
  }

  dateClicked(i) {
    this.selectedCalendarIndex = i;
    this.selectedDateEventsChange.emit(this.calendarDates[i].events);
  }

  closeDateTimeModal() {
    this.dateTimeModal.dismiss();
  }

  monthChanged($event) {
    var date = new Date($event.detail.value);
    this.fillMonth(date.getMonth() + 1, date.getFullYear());
  }
}
