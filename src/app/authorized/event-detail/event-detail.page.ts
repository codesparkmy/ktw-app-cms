import {
  AfterViewInit,
  Component,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, Platform } from '@ionic/angular';
import { EventImageApiService } from 'src/app/services/apis/event-image.api.service';
import { EventRegistrationApiService } from 'src/app/services/apis/event-registration.api.service';
import { EventApiService } from 'src/app/services/apis/event.api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.page.html',
  styleUrls: ['./event-detail.page.scss'],
})
export class EventDetailPage implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('eventImage') eventImage;
  @ViewChild('slides') slides;
  breakpoint = null;
  initBreakpoint = null;

  event = null;

  baseApiUrl = environment.api_url;
  images = [];
  highlightImage = null;
  eventRegistration = null;
  constructor(
    private platform: Platform,
    private navCtrl: NavController,
    private eventApiService: EventApiService,
    private activatedRoute: ActivatedRoute,
    private eventImageApiService: EventImageApiService,
    private eventRegistrationApiService: EventRegistrationApiService
  ) {}

  ngOnInit() {
    if (this.activatedRoute.snapshot.params.id) {
      this.eventApiService
        .getEventById(this.activatedRoute.snapshot.params.id)
        .then((res) => {
          this.event = res.data;

          this.eventImageApiService
            .getEventImagesByEventId(this.event?.id)
            .then((res) => {
              this.images = res.data.filter(
                (z) => z.id != this.event.highlightImage
              );
              this.highlightImage = res.data.find(
                (z) => z.id == this.event.highlightImage
              );
            });
        });

      this.eventRegistrationApiService
        .checkAttendance(this.activatedRoute.snapshot.params.id)
        .then((res) => {
          this.eventRegistration = res.data;
        });
    }
  }

  ngAfterViewInit(): void {}

  imageLoaded() {}

  backClicked() {
    this.navCtrl.back();
  }

  registerClicked() {
    this.eventRegistrationApiService.registerEvent(this.event.id);
  }
  ngOnDestroy(): void {}
}
