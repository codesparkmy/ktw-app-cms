import {
  AfterViewInit,
  Component,
  NgZone,
  OnInit,
  ViewChild,
} from '@angular/core';
import { CalendarPickerComponent } from 'src/app/components/calendar-picker/calendar-picker.component';
import { EventApiService } from 'src/app/services/apis/event.api.service';
import { OutletsApiService } from 'src/app/services/apis/outlets.api.service';
import { PublicHolidayApiService } from 'src/app/services/apis/public-holiday.api.service';
import { StorageService } from 'src/app/services/internal/storage.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit, AfterViewInit {
  @ViewChild('calendarPicker') calendarPicker: CalendarPickerComponent;
  events = [];

  constructor(
    private outletApiService: OutletsApiService,
    private storageService: StorageService,
    private eventApiService: EventApiService,
    private zone: NgZone
  ) {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
  }
}
