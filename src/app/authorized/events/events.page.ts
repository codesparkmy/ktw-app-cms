import { Component, OnDestroy, OnInit } from '@angular/core';
import { OutletsApiService } from 'src/app/services/apis/outlets.api.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {
  outlets = [];
  constructor(private outletApiService: OutletsApiService) {}

  ngOnInit() {
    this.outletApiService.getAll().then((res) => {
      this.outlets = res.data;
    });
  }

  outletSelected(evt) {}
}
