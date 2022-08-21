import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { PubSubService } from '../services/internal/pub-sub.service';

@Component({
  selector: 'app-authorized',
  templateUrl: './authorized.page.html',
  styleUrls: ['./authorized.page.scss'],
})
export class AuthorizedPage implements OnInit {
  constructor(
    private pubSubService: PubSubService,
    private router: Router,
    private menuController: MenuController
  ) {}

  ngOnInit() {
    this.router.events.subscribe((z) => {
      if (z instanceof NavigationEnd) {
        this.menuController.close();
      }
    });
  }

  menuIsOpening() {
    this.pubSubService.menuStateSubject.next(true);
  }

  menuIsClosing() {
    this.pubSubService.menuStateSubject.next(false);
  }
}
