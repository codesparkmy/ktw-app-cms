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
  selector: 'app-leave',
  templateUrl: './leave.page.html',
  styleUrls: ['./leave.page.scss'],
})
export class LeavePage implements OnInit, AfterViewInit {
  @ViewChild('progress') progress;
  @ViewChild('modal') modal;
  breakpoint = null;
  initBreakpoint = null;
  constructor(private platform: Platform, private navCtrl: NavController) {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      console.log(this.progress.nativeElement.offsetTop);
      console.log(this.progress.nativeElement);
      var percentage =
        1 -
        (this.progress.nativeElement.offsetTop +
          this.progress.nativeElement.clientHeight + 70) /
          this.platform.height();
      var bp = Math.round(percentage * 100) / 100;
      this.breakpoint = [bp, 0.95];
      this.initBreakpoint = bp;
    });
  }

  ngOnDestroy(): void {
    this.modal.dismiss();
  }
}
