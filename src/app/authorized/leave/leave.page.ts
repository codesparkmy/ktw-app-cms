import {
  AfterViewInit,
  Component,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import {
  IonModal,
  ModalController,
  NavController,
  Platform,
} from '@ionic/angular';
import { Subscription } from 'rxjs';
import { LeaveApiService } from 'src/app/services/apis/leave.api.service';
import { PubSubService } from 'src/app/services/internal/pub-sub.service';
import { format } from 'date-fns';

@Component({
  selector: 'app-leave',
  templateUrl: './leave.page.html',
  styleUrls: ['./leave.page.scss'],
})
export class LeavePage implements OnInit {
  @ViewChild('progress') progress;
  @ViewChild('header') header;
  breakpoint = null;
  initBreakpoint = null;
  start = null;
  end = null;
  requestLeave = [
    {
      leaveType: 'Annual',
      reason: 'I would like to take out some days.',
      status: 'rejected',
      dateStart: format(new Date(2022, 5, 9), 'd MMM yyyy'),
      dateEnd: format(new Date(2022, 5, 10), 'd MMM yyyy'),
    },
    {
      leaveType: 'Medical',
      reason: 'I would like to take out some days.',
      status: 'approved',
      dateStart: format(new Date(2022, 5, 9), 'd MMM yyyy'),
      dateEnd: format(new Date(2022, 5, 16), 'd MMM yyyy'),
    },
    {
      leaveType: 'Emergency',
      reason: 'I would like to take out some days.',
      status: 'rejected',
      dateStart: format(new Date(2022, 5, 9), 'd MMM yyyy'),
      dateEnd: format(new Date(2022, 5, 13), 'd MMM yyyy'),
    },
    {
      leaveType: 'Emergency',
      reason: 'I would like to take out some days.',
      status: 'pending',
      dateStart: format(new Date(2022, 5, 9), 'd MMM yyyy'),
      dateEnd: format(new Date(2022, 5, 12), 'd MMM yyyy'),
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
    private leaveApiService: LeaveApiService,
    private router: Router
  ) {}

  ngOnInit() {
    this.leaveApiService.getSummaries().then((res) => {
      this.leaveTypes = res.data;
    });

    this.formatDate();
  }

  formatDate() {
    for (var i = 0; i < this.requestLeave.length; i++) {
      this.requestLeave[i]['endDate'] = format(
        new Date(this.requestLeave[i].dateEnd),
        'd MMM'
      );
      this.requestLeave[i]['startDate'] = format(
        new Date(this.requestLeave[i].dateStart),
        'd MMM'
      );
    }
  }

  edit(data) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        data: JSON.stringify(data),
      },
    };

    this.router.navigate(['/members/leave/edit'], navigationExtras);
  }
}
