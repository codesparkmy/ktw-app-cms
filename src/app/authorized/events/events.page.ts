import { Component, OnDestroy, OnInit } from '@angular/core';
import { EventApiService } from 'src/app/services/apis/event.api.service';
import { OutletsApiService } from 'src/app/services/apis/outlets.api.service';
import { StorageService } from 'src/app/services/internal/storage.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {
  events = [];
  outlets = [];
  selectedOutlet = '';
  constructor(
    private outletApiService: OutletsApiService,
    private storageService: StorageService,
    private EventApiService: EventApiService
  ) {}

  ngOnInit() {
    this.storageService.decodeToken().then((token) => {
      this.outletApiService.getAll().then((outletsRes) => {
        this.outlets = outletsRes.data;
        this.selectedOutlet = token.outlet;
        if (this.selectedOutlet) {
          this.getEventsByOutletId(this.selectedOutlet);
        }
      });
    });
  }

  getEventsByOutletId(outletId) {
    this.EventApiService.getEventsByOutlet(outletId).then((res) => {
      this.events = res.data;
      console.log(this.events);
    });
  }
  onOutletSelect($event) {
    console.log($event);
  }
}
