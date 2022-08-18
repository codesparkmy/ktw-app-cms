import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'top-bar-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private menuController: MenuController) {}

  ngOnInit() {}

  toggleMenu() {
    this.menuController.toggle();
  }
}
