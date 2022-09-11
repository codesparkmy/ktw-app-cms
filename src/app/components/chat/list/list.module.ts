import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ListComponent } from './list.component';
import { ItemComponent } from '../item/item.component';
import { ChatItemComponentModule } from '../item/item.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, ChatItemComponentModule],
  declarations: [ListComponent],
  exports: [ListComponent,RouterModule],
})
export class ChatListComponentModule {}
