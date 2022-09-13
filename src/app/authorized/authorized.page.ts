import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { IonMenu, MenuController, NavController } from '@ionic/angular';
import { PubSubService } from '../services/internal/pub-sub.service';
import { StorageService } from '../services/internal/storage.service';
import { StorageKeys } from '../services/storage-keys';

@Component({
  selector: 'app-authorized',
  templateUrl: './authorized.page.html',
  styleUrls: ['./authorized.page.scss'],
})
export class AuthorizedPage implements OnInit, AfterViewInit {
  @ViewChild('menu') menu: IonMenu;

  isNavigated = false;
  constructor(
    private pubSubService: PubSubService,
    private router: Router,
    private navCtrl: NavController,
    private storageService: StorageService
  ) {}

  ngOnInit() {
    this.router.events.subscribe(async (z) => {
      if (z instanceof NavigationEnd) {
        this.isNavigated = true;
        this.menu.close();
      }
    });
  }

  ngAfterViewInit(): void {}

  menuIsOpening() {
    this.pubSubService.menuStateSubject.next({
      isClosing: false,
      isNav: false,
    });
  }

  menuIsClosing() {
    this.pubSubService.menuStateSubject.next({
      isClosing: true,
      isNav: this.isNavigated,
    });

    this.isNavigated = false;
  }

  async logOut() {
    await this.storageService.set(StorageKeys.TOKEN, null);
    this.pubSubService.token.next(null);
    this.navCtrl.navigateRoot('/login', {
      replaceUrl: true,
    });
  }
}
