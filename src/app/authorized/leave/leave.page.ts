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
  requestLeave = [
    {
      leaveType: 'Annual',
      reason: 'I would like to take out some days.',
      status: 'rejected',
    },
    {
      leaveType: 'Medical',
      reason: 'I would like to take out some days.',
      status: 'approved',
    },
    {
      leaveType: 'Emergency',
      reason: 'I would like to take out some days.',
      status: 'Rejected',
    },
    {
      leaveType: 'Emergency',
      reason: 'I would like to take out some days.',
      status: 'pending',
    },
    {
      leaveType: 'Annual',
      reason: 'I would like to take out some days.',
      status: 'approved',
    },
    {
      leaveType: 'Medical',
      reason: 'I would like to take out some days.',
      status: 'approved',
    },
    {
      leaveType: 'Emergency',
      reason: 'I would like to take out some days.',
      status: 'Rejected',
    },
    {
      leaveType: 'Emergency',
      reason: 'I would like to take out some days.',
      status: 'pending',
    },
    {
      leaveType: 'Annual',
      reason: 'I would like to take out some days.',
      status: 'approved',
    },
  ];
  leaveTypes = [
    {
      days: 7,
      maxDays: 14,
      type: 'Annual',
    },
    {
      days: 10,
      maxDays: 20,
      type: 'Medical',
    },
    {
      days: 8,
      maxDays: 10,
      type: 'Emergency',
    },
    {
      days: 90,
      maxDays: 90,
      type: 'Paternity',
    },
    {
      days: 14,
      maxDays: 14,
      type: 'Public',
    },
  ];
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
    this.menuSubscriber?.unsubscribe();
  }

  isScrolling($evnt) {
    console.log($evnt);
  }
}
