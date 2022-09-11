import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'event-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.scss'],
})
export class EventBigCardComponent implements OnInit {
  @Input('event') event;
  constructor() {}

  ngOnInit() {}
}
