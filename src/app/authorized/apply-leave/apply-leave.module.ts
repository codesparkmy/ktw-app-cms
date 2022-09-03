import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApplyLeavePageRoutingModule } from './apply-leave-routing.module';

import { ApplyLeavePage } from './apply-leave.page';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { PopupSelectComponent } from 'src/app/components/popup-select/popup-select.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApplyLeavePageRoutingModule
  ],
  declarations: [ApplyLeavePage,HeaderComponent,PopupSelectComponent]
})
export class ApplyLeavePageModule {}
