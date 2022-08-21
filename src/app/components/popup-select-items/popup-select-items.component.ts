import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-popup-select-items',
  templateUrl: './popup-select-items.component.html',
  styleUrls: ['./popup-select-items.component.scss'],
})
export class PopupSelectItemsComponent implements OnInit {
  constructor(private modalController: ModalController) {}

  ngOnInit() {}

  cancel() {
    this.modalController.dismiss('', 'cancel');
  }
}
