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
import { EventApiService } from 'src/app/services/apis/event.api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.page.html',
  styleUrls: ['./event-detail.page.scss'],
})
export class EventDetailPage implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('eventImage') eventImage;
  @ViewChild('modal') modal;
  @ViewChild('slides') slides;
  breakpoint = null;
  initBreakpoint = null;

  event = null;

  baseApiUrl = environment.api_url;
  images = [];
  highlightImage = null;

  constructor(
    private platform: Platform,
    private navCtrl: NavController,
    private eventApiService: EventApiService,
    private activatedRoute: ActivatedRoute,
    private eventImageApiService: EventImageApiService
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
    }
  }

  ngAfterViewInit(): void {}

  imageLoaded() {
    this.platform.ready().then((res) => {
      setTimeout(() => {
        var percentage =
          1 -
          (this.slides.el.offsetTop +
            this.eventImage.nativeElement.height +
            40) /
            window.innerHeight;

        var bp = Math.round(percentage * 100) / 100;
        this.breakpoint = [bp, 0.95];
        this.initBreakpoint = bp;
      }, 200);
    });
  }

  backClicked() {
    this.modal.dismiss();
    this.navCtrl.back();
  }

  ngOnDestroy(): void {
    this.modal.dismiss();
  }
}
