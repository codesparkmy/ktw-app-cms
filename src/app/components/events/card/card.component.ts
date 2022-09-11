import { Component, Input, OnInit } from '@angular/core';
import { EventImageApiService } from 'src/app/services/apis/event-image.api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'event-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input('event') event;

  baseApiUrl = environment.api_url;
  highlightImage = null;
  constructor(private eventImageApiService: EventImageApiService) {}

  ngOnInit() {
    this.eventImageApiService
      .getEventImagesByEventId(this.event?.id)
      .then((res) => {
        this.highlightImage = res.data.find(
          (z) => z.id == this.event.highlightImage
        );
      });
  }
}
