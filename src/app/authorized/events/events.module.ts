import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventsPageRoutingModule } from './events-routing.module';

import { EventsPage } from './events.page';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { PopupSelectComponent } from 'src/app/components/popup-select/popup-select.component';
import { EventBigCardComponent } from 'src/app/components/events/big-card/big-card.component';
import { PopupSelectComponentModule } from 'src/app/components/popup-select/popup-select.module';
import { PopupSelectItemsComponentModule } from 'src/app/components/popup-select-items/popup-select-items.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventsPageRoutingModule,
    PopupSelectComponentModule,
  ],
  declarations: [EventsPage, HeaderComponent, EventBigCardComponent],
})
export class EventsPageModule {}
