import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { map, share } from 'rxjs/operators';
import { AttendancesApiService } from 'src/app/services/apis/attendances.api.service';

@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.page.html',
  styleUrls: ['./check-in.page.scss'],
})
export class CheckInPage implements OnInit, OnDestroy, AfterViewInit {
  date: Date = new Date();

  constructor(private attendanceApiService: AttendancesApiService) {}

  time = new Date();
  disableButtonStart = false;
  disableButtonStop = true;
  int;
  current = null;
  ngOnInit() {
    this.attendanceApiService.getCurrent().then((res) => {
      this.current = res.data;
      if (res.data) {
        this.disableButtonStop = false;
        this.disableButtonStart = true;
      } else {
        this.disableButtonStop = true;
        this.disableButtonStart = false;
      }
    });
  }

  ngOnDestroy() {
    clearInterval(this.int);
  }

  ngAfterViewInit(): void {
    this.int = setInterval(() => {
      var d = new Date(); //object of date()
      var hr = d.getHours();
      var min = d.getMinutes();
      var sec = d.getSeconds();
      var hr_rotation = 30 * hr + min / 2; //converting current time
      var min_rotation = 6 * min;
      var sec_rotation = 6 * sec;

      var hour = document.getElementById('hour');
      var minute = document.getElementById('minute');
      var second = document.getElementById('second');
      hour.style.transform = `rotate(${hr_rotation}deg)`;
      minute.style.transform = `rotate(${min_rotation}deg)`;
      second.style.transform = `rotate(${sec_rotation}deg)`;
    }, 1000);
  }

  start() {
    this.attendanceApiService.checkIn().then((res) => {
      this.disableButtonStop = false;
      this.disableButtonStart = true;
      this.current = res.data;
    });
  }
  stop() {
    this.attendanceApiService.checkOut().then((res) => {
      this.current = null;
      this.disableButtonStop = true;
      this.disableButtonStart = false;
    });
  }
}
