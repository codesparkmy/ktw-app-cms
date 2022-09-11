import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { EventSliderComponentModule } from 'src/app/components/events/slider/slider.module';
import { ChatListComponentModule } from 'src/app/components/chat/list/list.module';
import { MinuteToTimePipe } from 'src/app/pipes/minute-to-time.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    EventSliderComponentModule,
    ChatListComponentModule,
  ],
  declarations: [HomePage, HeaderComponent],
})
export class HomePageModule {}
