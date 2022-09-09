import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { PopupSelectComponent } from './popup-select.component';
import { PopupSelectItemsComponentModule } from '../popup-select-items/popup-select-items.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PopupSelectItemsComponentModule,
  ],
  declarations: [PopupSelectComponent],
  exports: [PopupSelectComponent],
})
export class PopupSelectComponentModule {}
