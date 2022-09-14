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
  @Input('options') options: any[] = [];
  @Input('itemTitle') itemTitle;
  @Input('itemValue') itemValue;
  @Input('placeholder') placeholder;

  private _selected: any;

  get selected(): any {
    if (this.itemValue) return this._selected[this.itemValue];
    return this._selected;
  }

  @Input('selected')
  set selected(value: any) {
    if (this.itemValue) {
      var found = this.options.find((z) => z[this.itemValue] == value);
      if (found) {
        this._selected = found;
        this.selectedChange.emit(this._selected[this.itemValue]);
      } else return;
    } else {
      if (this._selected === value) {
        return;
      }
      this._selected = value;
      this.selectedChange.emit(this._selected);
    }
  }

  @Output('selectedChange') selectedChange: EventEmitter<any> =
    new EventEmitter<any>();

  @Output('onSelect') onSelectEmitter: EventEmitter<any> =
    new EventEmitter<any>();

  constructor(private modalController: ModalController, private zone: NgZone) {}

  ngOnInit() {}

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
        selected: this._selected,
      },
    });
    modal.present();

    modal.onDidDismiss().then((res) => {
      if (res.role == 'selected') {
        this.selected = res.data;
        this.onSelectEmitter.emit(this.selected);
      }
    });
  }
}
