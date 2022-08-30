import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeavePageRoutingModule } from './leave-routing.module';

import { LeavePage } from './leave.page';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { EventDetailModalDetailComponent } from 'src/app/components/event-detail-modal-detail/event-detail-modal-detail.component';
import { LeaveRequestModalComponent } from 'src/app/components/leave-request-modal/leave-request-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeavePageRoutingModule
  ],
  declarations: [LeavePage,HeaderComponent,EventDetailModalDetailComponent,LeaveRequestModalComponent]
})
export class LeavePageModule {}
