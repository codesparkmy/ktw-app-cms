import { Component, OnInit } from '@angular/core';
import { EventApiService } from 'src/app/services/apis/event.api.service';
import { OutletsApiService } from 'src/app/services/apis/outlets.api.service';
import { StorageService } from 'src/app/services/internal/storage.service';

@Component({
  selector: 'events-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  slidesOptions = {
    initialSlide: 0,
    direction: 'horizontal',
    speed: 500,
    slidesPerView: 1.07,
    spaceBetween: 0,
    centeredSlides: true,
  };
  events = [];
  outlets = [];

  constructor(
    private outletApiService: OutletsApiService,
    private storageService: StorageService,
    private EventApiService: EventApiService
  ) {}

  ngOnInit() {
    this.storageService.decodeToken().then((token) => {
      this.getEventsByOutletId(token.outlet);
    });
  }

  getEventsByOutletId(outletId) {
    this.EventApiService.getEventsByOutlet(outletId).then((res) => {
      this.events = res.data;
    });
  }
}
