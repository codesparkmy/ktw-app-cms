import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-popup-select-items',
  templateUrl: './popup-select-items.component.html',
  styleUrls: ['./popup-select-items.component.scss'],
})
export class PopupSelectItemsComponent implements OnInit {
  @Input() modal_title:string;
  @Input() options:object[];
  constructor(private modalController: ModalController) {}

  ngOnInit() {}

  cancel() {
    this.modalController.dismiss('', 'cancel');
  }
}
