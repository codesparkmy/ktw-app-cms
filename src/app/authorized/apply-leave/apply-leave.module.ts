import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApplyLeavePageRoutingModule } from './apply-leave-routing.module';

import { ApplyLeavePage } from './apply-leave.page';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { PopupSelectComponentModule } from 'src/app/components/popup-select/popup-select.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApplyLeavePageRoutingModule,
    PopupSelectComponentModule
  ],
  declarations: [ApplyLeavePage,HeaderComponent]
})
export class ApplyLeavePageModule {}
