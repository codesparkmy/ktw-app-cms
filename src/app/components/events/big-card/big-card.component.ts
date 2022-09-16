import { Component, Input, OnInit } from '@angular/core';
import { EventImageApiService } from 'src/app/services/apis/event-image.api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'event-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.scss'],
})
export class EventBigCardComponent implements OnInit {
  @Input('event') event;
  eventImage = '';
  baseApiUrl = environment.api_url;
  highlightImage = null;

  constructor(private eventImageApiService: EventImageApiService) {}

  ngOnInit() {
    console.log(this.event);

    this.eventImageApiService
      .getEventImagesByEventId(this.event?.id)
      .then((res) => {
        console.log(res)
        this.highlightImage = res.data.find(
          (z) => z.id == this.event.highlightImage
        );
        console.log(this.highlightImage?.fileId);
        this.eventImage = this.baseApiUrl + '/uploads/eventImages/' + this.highlightImage?.fileId
      });

  }
}
