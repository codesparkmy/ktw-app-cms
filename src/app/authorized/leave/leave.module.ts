import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeavePageRoutingModule } from './leave-routing.module';

import { LeavePage } from './leave.page';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { LeaveRequestModalComponent } from 'src/app/components/leave-request-modal/leave-request-modal.component';
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeavePageRoutingModule,
    NgCircleProgressModule.forRoot({}),
  ],
  declarations: [LeavePage, HeaderComponent, LeaveRequestModalComponent],
})
export class LeavePageModule {}
