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
  @ViewChild('header') header;
  breakpoint = null;
  initBreakpoint = null;
  menuSubscriber?: Subscription;

  leaveTypes = [];
  constructor(
    private platform: Platform,
    private pubSub: PubSubService,
    private leaveApiService: LeaveApiService
  ) {}

  ngOnInit() {
    this.leaveApiService.getSummaries().then((res) => {
      this.leaveTypes = res.data;
      console.log(this.leaveTypes);
    });
  }

  ionViewDidEnter() {}

  ngAfterViewInit(): void {}

  ionViewWillLeave() {}

  ngOnDestroy(): void {
    this.menuSubscriber.unsubscribe();
  }

  isScrolling($evnt) {
    console.log($evnt);
  }
}
