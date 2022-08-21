import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventDetailPageRoutingModule } from './event-detail-routing.module';

import { EventDetailPage } from './event-detail.page';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { EventDetailModalDetailComponent } from 'src/app/components/event-detail-modal-detail/event-detail-modal-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventDetailPageRoutingModule,
  ],
  declarations: [EventDetailPage, HeaderComponent,EventDetailModalDetailComponent],
})
export class EventDetailPageModule {}
