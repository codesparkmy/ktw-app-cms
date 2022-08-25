import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { map, share } from "rxjs/operators";

@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.page.html',
  styleUrls: ['./check-in.page.scss'],
})
export class CheckInPage implements OnInit, OnDestroy {

  date: Date = new Date();

  constructor() {
  }

  time = new Date();
  rxTime = new Date();
  intervalId;
  subscription: Subscription;
  disableButtonStart = false;
  disableButtonStop = true;

  ngOnInit() {
    // Using Basic Interval
    this.intervalId = setInterval(() => {
      this.time = new Date();
    }, 1000);

    // Using RxJS Timer
    this.subscription = timer(0, 1000)
      .pipe(
        map(() => new Date()),
        share()
      )
      .subscribe(time => {
        this.rxTime = time;
      });
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  start() {
    console.log('start');
    this.disableButtonStop = false;
    this.disableButtonStart = true;
  }
  stop() {
    console.log('stop');
    this.disableButtonStop = true;
    this.disableButtonStart = false;
  }

}
