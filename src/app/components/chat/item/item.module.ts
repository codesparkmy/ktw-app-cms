import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ItemComponent } from './item.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule],
  declarations: [ItemComponent],
  exports : [ItemComponent]
})
export class ChatItemComponentModule {}
