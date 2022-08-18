import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ListComponent } from './list.component';
import { ItemComponent } from '../item/item.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule],
  declarations: [ListComponent, ItemComponent],
  exports : [ListComponent,ItemComponent]
})
export class ChatListComponentModule {}
