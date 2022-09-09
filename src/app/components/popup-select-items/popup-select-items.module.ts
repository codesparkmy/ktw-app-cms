import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { PopupSelectItemsComponent } from '../popup-select-items/popup-select-items.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule],
  declarations: [PopupSelectItemsComponent],
  exports: [PopupSelectItemsComponent],
})
export class PopupSelectItemsComponentModule {}
