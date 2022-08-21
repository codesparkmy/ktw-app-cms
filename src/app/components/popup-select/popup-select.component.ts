import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PopupSelectItemsComponent } from '../popup-select-items/popup-select-items.component';

@Component({
  selector: 'popup-select',
  templateUrl: './popup-select.component.html',
  styleUrls: ['./popup-select.component.scss'],
})
export class PopupSelectComponent implements OnInit {
  constructor(private modalController: ModalController) {}

  ngOnInit() {}

  openModal() {
    this.modalController
      .create({
        component: PopupSelectItemsComponent,
        showBackdrop: true,
        cssClass: 'popup-select-items',
      })
      .then((res) => {
        res.present();
      });
  }
}
