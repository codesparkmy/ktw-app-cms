import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { PubSubService } from '../services/internal/pub-sub.service';

@Component({
  selector: 'app-authorized',
  templateUrl: './authorized.page.html',
  styleUrls: ['./authorized.page.scss'],
})
export class AuthorizedPage implements OnInit {
  constructor(private pubSubService: PubSubService) {}

  ngOnInit() {}

  menuIsOpening() {
    this.pubSubService.menuStateSubject.next(true);
  }

  menuIsClosing() {
    this.pubSubService.menuStateSubject.next(false);
  }
}
