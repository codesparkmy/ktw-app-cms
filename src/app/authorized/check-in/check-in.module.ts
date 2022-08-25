import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckInPageRoutingModule } from './check-in-routing.module';

import { CheckInPage } from './check-in.page';
import { HeaderComponent } from 'src/app/components/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheckInPageRoutingModule
  ],
  declarations: [CheckInPage,HeaderComponent]
})
export class CheckInPageModule {}
