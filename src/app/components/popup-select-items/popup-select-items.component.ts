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
  @Input('selected') selected;

  selectedIndex = null;
  constructor(private modalController: ModalController, private zone: NgZone) {}

  ngOnInit() {
    if (this.selected)
      this.selectedIndex = this.options.findIndex((z) => z == this.selected);
  }

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
