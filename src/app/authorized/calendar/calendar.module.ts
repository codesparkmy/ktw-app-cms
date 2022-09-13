import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalendarPageRoutingModule } from './calendar-routing.module';

import { CalendarPage } from './calendar.page';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { CalendarPickerComponent } from 'src/app/components/calendar-picker/calendar-picker.component';
import { CalendarEventItemComponent } from 'src/app/components/calendar-event-item/calendar-event-item.component';
import { CalendarEventItemsComponent } from 'src/app/components/calendar-event-items/calendar-event-items.component';
import { MinuteToTimePipe } from 'src/app/pipes/minute-to-time.pipe';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, CalendarPageRoutingModule],
  declarations: [
    CalendarPage,
    HeaderComponent,
    CalendarPickerComponent,
    CalendarEventItemComponent,
    CalendarEventItemsComponent,
    MinuteToTimePipe,
  ],
})
export class CalendarPageModule {}
