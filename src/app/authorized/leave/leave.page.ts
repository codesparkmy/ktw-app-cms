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
  presentingElement = null;
  menuSubscriber?: Subscription;

  constructor(
    private platform: Platform,
    private modalController: ModalController,
    private pubSub: PubSubService
  ) {}

  ngOnInit() {
    this.presentingElement = document.querySelector('#leave-content');
    this.menuSubscriber = this.pubSub.menuStateSubject.subscribe((z) => {
      if (this.modal) {
        if (z) this.modal.dismiss();
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
          70) /
          this.platform.height();
      var bp = Math.round(percentage * 100) / 100;
      this.breakpoint = [bp, 0.95];
      this.initBreakpoint = bp;
    });
  }

  ionViewWillLeave() {
    this.modal.dismiss();
  }

  ngOnDestroy(): void {
    this.menuSubscriber.unsubscribe();
  }
}
