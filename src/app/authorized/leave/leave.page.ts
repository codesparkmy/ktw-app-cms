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
  leaveTypes = [];
  leaves = [];
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

    this.leaveApiService.getLeaves().then((res) => {
      this.leaves = res.data;
      console.log(res.data);
    });
  }

  edit(data) {
    this.router.navigate(['/members/apply-leave', data.id]);
  }
}
