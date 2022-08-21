import {
  AfterViewInit,
  Component,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { NavController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.page.html',
  styleUrls: ['./event-detail.page.scss'],
})
export class EventDetailPage implements OnInit, OnDestroy {
  @ViewChild('eventImage') eventImage;
  @ViewChild('modal') modal;
  breakpoint = null;
  initBreakpoint = null;
  constructor(private platform: Platform, private navCtrl: NavController) {}

  ngOnInit() {}

  imageLoaded() {
    setTimeout(() => {
      var percentage =
        1 -
        (this.eventImage.nativeElement.offsetTop +
          this.eventImage.nativeElement.height) /
          this.platform.height();

      var bp = Math.round(percentage * 100) / 100;
      this.breakpoint = [bp, 0.95];
      this.initBreakpoint = bp;
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
