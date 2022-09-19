import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RevenuePageRoutingModule } from './revenue-routing.module';

import { RevenuePage } from './revenue.page';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { PopupSelectComponentModule } from 'src/app/components/popup-select/popup-select.module';
import { ApplyLeavePageRoutingModule } from '../apply-leave/apply-leave-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RevenuePageRoutingModule,
    ApplyLeavePageRoutingModule,
    PopupSelectComponentModule
  ],
  declarations: [RevenuePage,HeaderComponent]
})
export class RevenuePageModule {}
