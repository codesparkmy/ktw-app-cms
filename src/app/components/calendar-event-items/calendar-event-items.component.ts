import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'calendar-event-items',
  templateUrl: './calendar-event-items.component.html',
  styleUrls: ['./calendar-event-items.component.scss'],
})
export class CalendarEventItemsComponent implements OnInit {
  @Input('events') events = [];
  constructor() {}

  ngOnInit() {}
}
