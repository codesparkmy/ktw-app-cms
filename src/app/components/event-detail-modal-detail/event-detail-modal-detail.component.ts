import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EventImageApiService } from 'src/app/services/apis/event-image.api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'event-detail-modal',
  templateUrl: './event-detail-modal-detail.component.html',
  styleUrls: ['./event-detail-modal-detail.component.scss'],
})
export class EventDetailModalDetailComponent implements OnInit {
  @Input('event') event;
  @Input('registration') registration;
  @Output('registerClicked') registerClickedEmitter = new EventEmitter<any>();
  constructor() {}

  ngOnInit() {}

  registerClick() {
    this.registerClickedEmitter.emit();
  }
}
