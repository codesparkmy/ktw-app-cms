import { Component, Input, OnInit } from '@angular/core';
import { EventImageApiService } from 'src/app/services/apis/event-image.api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'event-detail-modal',
  templateUrl: './event-detail-modal-detail.component.html',
  styleUrls: ['./event-detail-modal-detail.component.scss'],
})
export class EventDetailModalDetailComponent implements OnInit {
  @Input('event') event;

  constructor() {}

  ngOnInit() {}
}
