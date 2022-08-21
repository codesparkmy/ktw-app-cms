import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventsPageRoutingModule } from './events-routing.module';

import { EventsPage } from './events.page';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { PopupSelectComponent } from 'src/app/components/popup-select/popup-select.component';
import { EventBigCardComponent } from 'src/app/components/events/big-card/big-card.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, EventsPageRoutingModule],
  declarations: [
    EventsPage,
    HeaderComponent,
    PopupSelectComponent,
    EventBigCardComponent,
  ],
})
export class EventsPageModule {}
