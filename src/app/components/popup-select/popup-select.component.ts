import {
  Component,
  EventEmitter,
  Input,
  NgZone,
  OnInit,
  Output,
} from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PopupSelectItemsComponent } from '../popup-select-items/popup-select-items.component';

@Component({
  selector: 'popup-select',
  templateUrl: './popup-select.component.html',
  styleUrls: ['./popup-select.component.scss'],
})
export class PopupSelectComponent implements OnInit {
  @Input('title') title;
  @Input('options') options;
  @Input('itemTitle') itemTitle;
  @Input('itemValue') itemValue;
  @Input('placeholder') placeholder;
  @Output('itemSelected') itemSelectedEmitter: EventEmitter<any> =
    new EventEmitter<any>();

  selected = null;
  constructor(private modalController: ModalController, private zone: NgZone) {}

  ngOnInit() {
    this.selected = this.options[0].title;
  }

  async openModal() {
    var modal = await this.modalController.create({
      component: PopupSelectItemsComponent,
      showBackdrop: true,
      cssClass: 'popup-select-items',
      componentProps: {
        modalTitle: this.title,
        options: this.options,
        itemTitle: this.itemTitle,
        itemValue: this.itemValue,
      },
    });
    modal.present();

    modal.onDidDismiss().then((res) => {
      if (res.role == 'selected') {
        this.itemSelectedEmitter.emit(res.data);
        this.zone.run(() => {
          this.selected = res ? res.data.title : "";
        });
      }
    });
  }
}
