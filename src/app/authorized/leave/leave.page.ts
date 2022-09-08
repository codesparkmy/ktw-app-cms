import {
  AfterViewInit,
  Component,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import {
  IonModal,
  ModalController,
  NavController,
  Platform,
} from '@ionic/angular';
import { Subscription } from 'rxjs';
import { LeaveApiService } from 'src/app/services/apis/leave.api.service';
import { PubSubService } from 'src/app/services/internal/pub-sub.service';

@Component({
  selector: 'app-leave',
  templateUrl: './leave.page.html',
  styleUrls: ['./leave.page.scss'],
})
export class LeavePage implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('progress') progress;
  @ViewChild('modal') modal: IonModal;
  @ViewChild('header') header;
  breakpoint = null;
  initBreakpoint = null;
  menuSubscriber?: Subscription;

  constructor(
    private platform: Platform,
    private pubSub: PubSubService,
    private leaveApiService: LeaveApiService
  ) {}

  ngOnInit() {
    this.leaveApiService.getSummaries().then((res) => {
      console.log(res.data);
    });
    this.menuSubscriber = this.pubSub.menuStateSubject.subscribe((z) => {
      if (this.modal) {
        if (z.isNav || z.isClosing) this.modal.dismiss();
        else this.modal.present();
      }
    });
  }

  ionViewDidEnter() {
    if (this.breakpoint && this.initBreakpoint) this.modal.present();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      var percentage =
        1 -
        (this.progress.nativeElement.offsetTop +
          this.progress.nativeElement.clientHeight +
          20) /
          this.platform.height();
      var bp = Math.round(percentage * 100) / 100;
      this.breakpoint = [bp, 0.95];
      this.initBreakpoint = bp;
    }, 300);
  }

  ionViewWillLeave() {
    this.modal.dismiss();
  }

  ngOnDestroy(): void {
    this.menuSubscriber.unsubscribe();
  }

  isScrolling($evnt) {
    console.log($evnt);
  }
}
