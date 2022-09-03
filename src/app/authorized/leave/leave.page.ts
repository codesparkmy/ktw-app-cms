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
import { NavController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-leave',
  templateUrl: './leave.page.html',
  styleUrls: ['./leave.page.scss'],
})
export class LeavePage implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('progress') progress;
  @ViewChild('modal') modal;
  @ViewChild('header') header;
  breakpoint = null;
  initBreakpoint = null;
  constructor(private platform: Platform) {}

  ngOnInit() {}

  ionViewDidEnter(){
    console.log(this.breakpoint);
    console.log(this.initBreakpoint);
  }

  ngAfterViewInit(): void {
    console.log('trigger after view init');
    setTimeout(() => {
      var percentage =
        1 -
        (this.progress.nativeElement.offsetTop +
          this.progress.nativeElement.clientHeight +
          70) /
          this.platform.height();
      var bp = Math.round(percentage * 100) / 100;
      this.breakpoint = [bp, 0.95];
      this.initBreakpoint = bp;
    });
  }

  @HostListener('ionViewDidLeave')
  ngOnDestroy(): void {
    console.log('destroy');
    this.modal.dismiss();
  }
}
