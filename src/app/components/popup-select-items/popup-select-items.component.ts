import { Component, Input, NgZone, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-popup-select-items',
  templateUrl: './popup-select-items.component.html',
  styleUrls: ['./popup-select-items.component.scss'],
})
export class PopupSelectItemsComponent implements OnInit {
  @Input() modalTitle: string;
  @Input() options: object[];
  @Input('itemTitle') itemTitle;
  @Input('itemValue') itemValue;
  constructor(private modalController: ModalController, private zone: NgZone) {}

  ngOnInit() {}

  cancel() {
    this.modalController.dismiss('', 'cancel');
  }

  selectItem(option) {
    this.modalController.dismiss(
      this.itemValue ? option[this.itemValue] : option,
      'selected'
    );
  }
}
