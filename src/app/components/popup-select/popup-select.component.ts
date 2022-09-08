import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PopupSelectItemsComponent } from '../popup-select-items/popup-select-items.component';

@Component({
  selector: 'popup-select',
  templateUrl: './popup-select.component.html',
  styleUrls: ['./popup-select.component.scss'],
})
export class PopupSelectComponent implements OnInit {
  @Input() title;
  @Input() options;
  constructor(private modalController: ModalController) {}

  ngOnInit() {
    console.log('options :: ', this.options);
  }

  openModal() {
    this.modalController
      .create({
        component: PopupSelectItemsComponent,
        showBackdrop: true,
        cssClass: 'popup-select-items',
        componentProps: {
          modal_title: this.title,
          options: this.options,
        },
      })
      .then((res) => {
        res.present();
      });
  }
}
